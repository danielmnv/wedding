import { GuestAttendance } from '../types/rsvp';
import { FirestoreApi } from '../lib/firebase/firestore-api';
import { SupabaseApi } from '../lib/supabase/supabase-api';

export const useApi = () => {
  const firestore = new FirestoreApi();
  const supabase = new SupabaseApi();

  let dbRaw = process.env.NEXT_PUBLIC_DATABASE || 'supabase';
  const database: 'supabase' | 'firebase' = dbRaw === 'firebase' ? 'firebase' : 'supabase';

  const api = database === 'supabase' ? supabase : firestore;

  async function findInvitation(code: string) {
    return api.findInvitation(code);
  }

  async function confirmInvitation(invitationId: string, guests: GuestAttendance[], gratitudeMessage?: string) {
    return api.confirmInvitation(invitationId, guests, gratitudeMessage);
  }

  return {
    findInvitation,
    confirmInvitation,
  };
};
