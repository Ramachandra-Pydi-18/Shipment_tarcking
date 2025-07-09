// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgRapvOZj7Xi6EAZvmJ7Vlc4kb_ix1Sx0",
  authDomain: "shipment-track-f1f3b.firebaseapp.com",
  projectId: "shipment-track-f1f3b",
  storageBucket: "shipment-track-f1f3b.appspot.com", // fix this too!
  messagingSenderId: "897097086654",
  appId: "1:897097086654:web:bb6494d0015c4520c410ef",
  measurementId: "G-3D53M4602B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const timestamp = serverTimestamp;
