

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJXqCe-jQTc1eSwd9gD2plBMjtso94MDg",
  authDomain: "chatapp-f4936.firebaseapp.com",
  projectId: "chatapp-f4936",
  storageBucket: "chatapp-f4936.appspot.com",
  messagingSenderId: "943476580526",
  appId: "1:943476580526:web:d3a83e4930b78f70d24d3f",
  measurementId: "G-4ZZQC3BCVB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();