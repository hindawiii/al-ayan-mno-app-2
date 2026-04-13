import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADUInP3ZiHT-vJRD8vyAAd1WcGhHtGaAQ",
  authDomain: "al-ayan-mno.firebaseapp.com",
  projectId: "al-ayan-mno",
  storageBucket: "al-ayan-mno.firebasestorage.app",
  messagingSenderId: "875396992058",
  appId: "1:875396992058:web:00035aaf54c9fc4f947903",
  measurementId: "G-CD04P71WZK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
