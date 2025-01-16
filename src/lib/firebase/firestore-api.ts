import { db } from './firestore';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { GuestAttendance, Invitation, InvitationConverter } from '../../types/rsvp';
import { Api } from '../api';

export class FirestoreApi extends Api {
  async findInvitation(code: string): Promise<Invitation> {
    const docRef = doc(db, 'invitations', code).withConverter(InvitationConverter);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Reservation not found');
    }

    return docSnap.data()!;
  }

  async confirmInvitation(
    invitationCode: string,
    guests: GuestAttendance[],
    gratitudeMessage?: string | undefined,
  ): Promise<void> {
    const docRef = doc(db, 'invitations', invitationCode);
    await updateDoc(docRef, {
      guests: guests.map((g) => ({ ...g, attending: g.attending ?? false })),
      ...(gratitudeMessage && { gratitudeMessage: arrayUnion(gratitudeMessage) }),
    });
  }
}
