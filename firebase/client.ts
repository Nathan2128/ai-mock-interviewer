// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Q9Ff3PxTQIbh7Y3YZvHA42Kq4IgOMEk",
  authDomain: "mockinterviewerai-42aa2.firebaseapp.com",
  projectId: "mockinterviewerai-42aa2",
  storageBucket: "mockinterviewerai-42aa2.firebasestorage.app",
  messagingSenderId: "531066638939",
  appId: "1:531066638939:web:e6481050d6e89d3c99e57e",
  measurementId: "G-MMCLN8QFPZ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
