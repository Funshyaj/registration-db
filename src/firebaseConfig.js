// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0oBLm3VYkH-CYmNgkuMjd-UUtW4Qr4p8",
  authDomain: "registration-db-723e3.firebaseapp.com",
  databaseURL: "https://registration-db-723e3-default-rtdb.firebaseio.com",
  projectId: "registration-db-723e3",
  storageBucket: "registration-db-723e3.appspot.com",
  messagingSenderId: "751124590289",
  appId: "1:751124590289:web:4340c9c1cf7b5c392d1ff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)