
// 1. Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Use Firestore if you prefer

// 2. Your Firebase config (copy from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyATsicxKGgbEtRdU03l-1nO8Lc4kfIHp_8",
  authDomain: "chat-app-41469.firebaseapp.com",
  projectId: "chat-app-41469",
  storageBucket: "chat-app-41469.firebasestorage.app",
  messagingSenderId: "1006091896320",
  appId: "1:1006091896320:web:9c40ae32b4faa7b84dfae5",
  measurementId: "G-7XPTEG5FNP"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. Export services for use in your components
export const auth = getAuth(app);
export const db = getDatabase(app); // Use Firestore if you prefer
