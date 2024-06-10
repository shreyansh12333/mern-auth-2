// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3916e.firebaseapp.com",
  projectId: "mern-auth-3916e",
  storageBucket: "mern-auth-3916e.appspot.com",
  messagingSenderId: "930119063470",
  appId: "1:930119063470:web:2e75f4f0db5e01fb5bda3f",
  measurementId: "G-SQ5LWPDP5K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
