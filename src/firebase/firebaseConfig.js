// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl-ouFuv3mK6iqtwy30kFe_WNbF1S6znA",
  authDomain: "shisui-bb595.firebaseapp.com",
  projectId: "shisui-bb595",
  storageBucket: "shisui-bb595.firebasestorage.app",
  messagingSenderId: "859016723201",
  appId: "1:859016723201:web:199adca17c78c44a2d7900",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
