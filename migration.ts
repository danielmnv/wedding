import * as dotenv from 'dotenv';
import * as admin from 'firebase-admin';
import * as XLSX from 'xlsx';
import path from 'path';

interface GuestData {
  Guest: string;
  Header: string;
}

type GroupedData = Map<string, GuestData[]>;

// Initialize Firebase Admin SDK with service account key
function initializeFirestore() {
  const serviceAccount = require('./credentials.json');

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  return admin.firestore();
}

async function test(): Promise<void> {
  const db = initializeFirestore();

  try {
    // Retrieve all documents from the "invitations" collection
    const snapshot = await db.collection('invitations').get();

    if (snapshot.empty) {
      console.log("No documents found in the 'invitations' collection.");
      return;
    }

    // Iterate over documents and log their data
    snapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
  }
}

function deleteAllData(): void {
  const db = initializeFirestore();

  db.collection('invitations')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
    })
    .catch((error) => {
      console.error('Error deleting documents: ', error);
    });
}

function storeData(groupedData: GroupedData): void {
  const db = initializeFirestore();

  groupedData.forEach((data, invitationCode) => {
    // Create a new document with a generated ID
    const docRef = db.collection('invitations').doc(invitationCode.padStart(4, '0'));
    const header: string | undefined = data[0].Header;

    // Set the data for the document
    docRef
      .set({
        ...(header && header.length > 0 && { header }),
        invitedBy: 'Groom',
        guests: data.map(({ Guest }) => ({ name: Guest })),
      })
      .then(() => {
        console.log(`Document written with ID: ${docRef.id}`);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
}

// Function to read and group Excel data
function groupByInvitationCode(filePath: string, output: boolean = false): GroupedData {
  // Read the workbook
  const workbook = XLSX.readFile(filePath, { cellText: true });

  // Assume the first sheet is the target sheet
  const sheet = workbook.Sheets['Groom'];

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
dotenv.config();

// Parse command-line arguments
const args = process.argv.slice(2);
const actionArg = args.find((arg) => arg.startsWith('--action='));
const action = actionArg ? actionArg.split('=')[1] : 'test';

// Perform the action based on the provided argument
switch (action) {
  case 'test':
    test();
    break;
  case 'delete':
    deleteAllData();
    break;
  case 'store':
    const filePath = path.join(__dirname, 'Guests.xlsx');
    const groupedData = groupByInvitationCode(filePath, false);
    storeData(groupedData);
    break;
  default:
    console.log('Invalid action.');
    break;
}
