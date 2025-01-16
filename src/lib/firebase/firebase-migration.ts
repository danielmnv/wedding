import * as admin from 'firebase-admin';
import { GroupedData } from '../migration';

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

export function test(): void {
  const db = initializeFirestore();

  db.collection('invitations')
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log("No documents found in the 'invitations' collection.");
        return;
      }

      // Iterate over documents and log their data
      snapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    })
    .catch((error) => {
      console.error('Error fetching documents:', error);
    });
}

export function deleteAllData(): void {
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

export function storeData(groupedData: GroupedData, invitedBy: 'Bride' | 'Groom'): void {
  const db = initializeFirestore();

  groupedData.forEach((data, invitationCode) => {
    // Create a new document with a generated ID
    const docRef = db.collection('invitations').doc(invitationCode.padStart(4, '0'));
    const header: string | undefined = data[0].Header;

    // Set the data for the document
    docRef
      .set({
        ...(header && header.length > 0 && { header }),
        invitedBy,
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
