import { GuestAttendance } from '../types/rsvp';
import { SupabaseApi } from '../lib/supabase/supabase-api';

export const useApi = () => {
  const supabase = new SupabaseApi();

  async function findInvitation(code: string) {
    return supabase.findInvitation(code);
  }

  async function confirmInvitation(invitationId: string, guests: GuestAttendance[], gratitudeMessage?: string) {
    return supabase.confirmInvitation(invitationId, guests, gratitudeMessage);
  }

  return {
    findInvitation,
    confirmInvitation,
  };
};
