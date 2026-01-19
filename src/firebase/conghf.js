import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyB97S_53eRdU17LIQW6TBtRhcupICJYRdk",
  authDomain: "vueproject-80f30.firebaseapp.com",
  projectId: "vueproject-80f30",
  storageBucket: "vueproject-80f30.firebasestorage.app",
  messagingSenderId: "295580480469",
  appId: "1:295580480469:web:a8958446d2ca8cacacc35c",
  measurementId: "G-NR80Y26N0G"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
