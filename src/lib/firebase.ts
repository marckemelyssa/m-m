// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnR7qwqnvf7GGMeIGElZLvw5bsSaBbFyE",
  authDomain: "marckemelyssa.firebaseapp.com",
  projectId: "marckemelyssa",
  storageBucket: "marckemelyssa.firebasestorage.app",
  messagingSenderId: "132631027056",
  appId: "1:132631027056:web:a360e2e3a10a2353d2c3b5",
  measurementId: "G-C44MNV0DSB"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

// Initialize Firebase (singleton pattern to avoid multiple instances)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Storage
export const storage = getStorage(app)

export { app, auth };