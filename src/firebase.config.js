import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWlF196mJrXOCtGax-v9k2ICnc0-zVMtY",
  authDomain: "market-place-d5038.firebaseapp.com",
  projectId: "market-place-d5038",
  storageBucket: "market-place-d5038.appspot.com",
  messagingSenderId: "181751082546",
  appId: "1:181751082546:web:68eb92a8b0ad0b2720962b",
  measurementId: "G-NSEFPESDFJ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
