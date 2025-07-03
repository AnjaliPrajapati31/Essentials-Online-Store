import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwaTB4IiU-HQK6tleWzKxR-tdV--TezeQ",
  authDomain: "react-ecommerce-1c882.firebaseapp.com",
  projectId: "react-ecommerce-1c882",
  storageBucket: "react-ecommerce-1c882.firebasestorage.app",
  messagingSenderId: "219487899778",
  appId: "1:219487899778:web:58e3ca85a6db596d14649b"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);