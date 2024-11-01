import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "import.meta.env.VITE_API_KEY",
  authDomain: "flare-6e87a.firebaseapp.com",
  projectId: "flare-6e87a",
  storageBucket: "flare-6e87a.appspot.com",
  messagingSenderId: "680392742853",
  appId: "1:680392742853:web:4fe1e83c76b4b0a0851dac"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
