import { Api } from '../api';
import { GuestAttendance } from '../../types/rsvp';
import { supabase } from './supabase';
import { PersonType } from '../../types/person';

export class SupabaseApi extends Api {
  async findInvitation(code: string) {
    const { data, error } = await supabase
      .from('invitations')
      .select('code, header, invited_by, guests(id, name, is_attending)')
      .eq('code', code)
      .single();

    if (error) {
      throw error;
    }

    return {
      id: `${data.code}`,
      header: data.header || undefined,
      invitedBy: PersonType[data.invited_by as keyof typeof PersonType],
      guests: data.guests.map((g: any) => ({
        id: `${g.id}`,
        name: g.name,
        attending: g.is_attending,
      })),
      gratitudeMessage: [],
    };
  }

  async confirmInvitation(invitationCode: string, guests: GuestAttendance[], gratitudeMessage?: string) {
    for (const guest of guests) {
      await supabase
        .from('guests')
        .update({
          is_attending: guest.attending ?? false,
        })
        .eq('id', parseInt(guest.id));
    }

    if (gratitudeMessage) {
      await supabase.from('messages').insert({
        text: gratitudeMessage,
        invitation_code: invitationCode,
      });
    }
  }
}
