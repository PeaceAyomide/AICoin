// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBxkD9urLXantu0XAR3FAq14R3pu227Tf0",
  authDomain: "ronzi-254f8.firebaseapp.com",
  projectId: "ronzi-254f8",
  storageBucket: "ronzi-254f8.appspot.com",
  messagingSenderId: "115483288759",
  appId: "1:115483288759:web:5ab434ced6ede2bc8b9932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)