// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWVcLSBpTd_1XRpfYq6A2crTTws5AwhyA",
  authDomain: "aten-494bd.firebaseapp.com",
  projectId: "aten-494bd",
  storageBucket: "aten-494bd.firebasestorage.app",
  messagingSenderId: "270072570002",
  appId: "1:270072570002:web:299fded622be6fb340c64b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);