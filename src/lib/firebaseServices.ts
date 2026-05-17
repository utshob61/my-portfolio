import { collection, addDoc, getDocs, query, where, DocumentData } from 'firebase/firestore';
import { auth, db, serverTimestamp } from './firebase';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactMessage(data: ContactMessage) {
  const messagesRef = collection(db, 'messages');
  return addDoc(messagesRef, {
    ...data,
    userId: auth.currentUser?.uid || 'anonymous',
    createdAt: serverTimestamp(),
    read: false,
  });
}

export async function getProjects() {
  const projectsRef = collection(db, 'projects');
  const snapshot = await getDocs(projectsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DocumentData));
}

export async function getUserMessages() {
  if (!auth.currentUser) return [];
  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, where('userId', '==', auth.currentUser.uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DocumentData));
}
