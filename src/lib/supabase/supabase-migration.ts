import { GroupedData } from '../migration';
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

function initializeSupabase() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing env variables for Supabase');
  }

  return createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function test(): void {
  initializeSupabase()
    .from('invitations')
    .select('id, code, header, invitedBy, guests(name, isAttending)')
    .gt('id', 0)
    .then((response) => {
      if (response.error) {
        console.error('Error fetching data:', response.error.message);
        return;
      }

      if (response.data) {
        console.log('Fetched data:', response.data);
      }
    });
}

export function deleteAllData(): void {
  initializeSupabase()
    .from('invitations')
    .delete()
    .gt('id', 0)
    .then((response) => {
      if (response.error) {
        console.error('Error deleting data:', response.error.message);
        return;
      }

      console.log('Deleted data:', response.data);
    });
}

export function storeData(groupedData: GroupedData, invitedBy: 'Bride' | 'Groom'): void {
  const supabase = initializeSupabase();

  groupedData.forEach((data, invitationCode) => {
    supabase
      .from('invitations')
      .upsert(
        {
          code: invitationCode.padStart(4, '0'),
          header: data[0].Header || null,
          invited_by: invitedBy,
        },
        {
          onConflict: 'code',
        },
      )
      .select('code')
      .single()
      .then((response) => {
        if (response.error) {
          console.error('Error adding data:', response.error.message);
          return;
        }

        const invitationCode = response.data.code;

        // Delete existing guests
        supabase
          .from('guests')
          .delete()
          .eq('invitation_code', invitationCode)
          .then((response) => {
            if (response.error) {
              console.error('Error deleting data:', response.error.message);
              return;
            }

            // Add guests
            supabase
              .from('guests')
              .upsert(data.map((row) => ({ name: row.Guest, invitation_code: invitationCode })))
              .then((response) => {
                if (response.error) {
                  console.error('Error adding data:', response.error.message);
                  return;
                }
              });
          });
      });
  });
}
