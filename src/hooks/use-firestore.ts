import { db } from '../lib/firebase';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { GuestAttendance, Invitation, InvitationConverter } from '../types/rsvp';

export const useFirestore = () => {
  // Get the invitation document from Firestore with the given code and return it
  async function getInvitationByCode(code: string): Promise<Invitation> {
    const docRef = doc(db, 'invitations', code).withConverter(InvitationConverter);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Reservation not found');
    }

    return docSnap.data()!;
  }

  // Update the invitation guest attendance in Firestore
  async function updateInvitation(code: string, guests: GuestAttendance[], gratitudeMessage?: string): Promise<void> {
    const docRef = doc(db, 'invitations', code);
    await updateDoc(docRef, {
      guests: guests.map((g) => ({ ...g, attending: g.attending ?? true })),
      ...(gratitudeMessage && { gratitudeMessage: arrayUnion(gratitudeMessage) }),
    });
  }

  return {
    getInvitationByCode,
    updateInvitation,
  };
};
