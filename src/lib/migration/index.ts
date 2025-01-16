import * as dotenv from 'dotenv';
import * as XLSX from 'xlsx';
import path from 'path';
import * as firebaseMigration from '../firebase/firebase-migration';
import * as supabaseMigration from '../supabase/supabase-migration';

interface GuestData {
  Guest: string;
  Header: string;
}

export type GroupedData = Map<string, GuestData[]>;

// Function to read and group Excel data
function groupByInvitationCode(wb: XLSX.WorkBook, sheetName: string, output: boolean = false): GroupedData {
  // Assume the first sheet is the target sheet
  const sheet = wb.Sheets[sheetName];

  // Convert sheet to JSON
  const rows = XLSX.utils.sheet_to_json<{
    Guest: string;
    'Invitation Code': number | string;
    Header: string;
  }>(sheet);

  // Initialize a map to group data by Invitation Code
  const groupedData: GroupedData = new Map();

  // Iterate over the rows
  rows.forEach((row) => {
    const guest = row['Guest'];
    const invitationCode = row['Invitation Code'];
    const header = row['Header'];

    if (invitationCode) {
      const key = typeof invitationCode === 'number' ? invitationCode.toString() : invitationCode;
      if (!groupedData.has(key)) {
        groupedData.set(key, []);
      }
      groupedData.get(key)?.push({ Guest: guest, Header: header });
    }
  });

  // Output the grouped data
  if (output) {
    groupedData.forEach((data, invitationCode) => {
      console.log(`Invitation Code: ${invitationCode}`);
      data.forEach(({ Guest, Header }) => {
        console.log(`  Guest: ${Guest}, Header: ${Header}`);
      });
    });
  }

  return groupedData;
}

// Load environment variables from .env file
dotenv.config({ path: __dirname + `/../../../.env` });
// console.log(process.env)

// Parse command-line arguments
const args = process.argv.slice(2);
const actionArg = args.find((arg) => arg.startsWith('--action='));
const action = actionArg ? actionArg.split('=')[1] : 'test';

// Select database based on environment
const database = process.env.NEXT_PUBLIC_DATABASE || 'supabase';
const builder = database === 'supabase' ? supabaseMigration : firebaseMigration;

// Perform the action based on the provided argument
switch (action) {
  case 'test':
    builder.test();
    break;
  case 'delete':
    builder.deleteAllData();
    break;
  case 'store':
    const filePath = path.join(__dirname, 'Guests.xlsx');
    // Read the workbook
    const workbook = XLSX.readFile(filePath, { cellText: true });

    let type: 'Bride' | 'Groom' = 'Groom';
    console.log('Storing Groom data...');
    builder.storeData(groupByInvitationCode(workbook, type, false), type);

    type = 'Bride';
    console.log('Storing Bride data...');
    builder.storeData(groupByInvitationCode(workbook, type, false), type);
    break;
  default:
    console.log('Invalid action.');
    break;
}
