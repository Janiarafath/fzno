import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_94yDaDNhwSWSzxC15IBoadeusrVox3Q",
  authDomain: "software-company-748b8.firebaseapp.com",
  projectId: "software-company-748b8",
  storageBucket: "software-company-748b8.firebasestorage.app",
  messagingSenderId: "762078640174",
  appId: "1:762078640174:web:93e3d05c6b2154355647bf",
  measurementId: "G-2BWH3XRZHL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);