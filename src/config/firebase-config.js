// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcdymvV_iSQLb-sBxSghzzE0hgFdu3lA4",
  authDomain: "fir-chatapp-e5dd1.firebaseapp.com",
  projectId: "fir-chatapp-e5dd1",
  storageBucket: "fir-chatapp-e5dd1.appspot.com",
  messagingSenderId: "450837113479",
  appId: "1:450837113479:web:cab8e936c336546dc4a622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)