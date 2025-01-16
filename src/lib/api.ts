import { GuestAttendance, Invitation } from '../types/rsvp';

export abstract class Api {
  abstract findInvitation(code: string): Promise<Invitation>;
  abstract confirmInvitation(
    invitationCode: string,
    guests: GuestAttendance[],
    gratitudeMessage?: string,
  ): Promise<void>;
}
