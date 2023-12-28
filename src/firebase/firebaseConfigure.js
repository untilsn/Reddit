import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMZ0SGjZgVskiNTKprnwC8dlAJUbjQRjQ",
  authDomain: "reddit-91e7a.firebaseapp.com",
  projectId: "reddit-91e7a",
  storageBucket: "reddit-91e7a.appspot.com",
  messagingSenderId: "769141948877",
  appId: "1:769141948877:web:97dcc2684b2bbfab6a8484",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
