import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFygjqutVW3VnhBRRePHdPBhKkOKQ559o",
  authDomain: "house-marketplace-app-8256f.firebaseapp.com",
  projectId: "house-marketplace-app-8256f",
  storageBucket: "house-marketplace-app-8256f.appspot.com",
  messagingSenderId: "612332473887",
  appId: "1:612332473887:web:81732de9b5630f88b30f2a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const dv = getFirestore();