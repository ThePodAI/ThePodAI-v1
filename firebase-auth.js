// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk4i2LzILDOxu47qQ2zO5omEowTU7KTJA",
    authDomain: "thepodai.firebaseapp.com",
    projectId: "thepodai",
    storageBucket: "thepodai.appspot.com",
    messagingSenderId: "682631129610",
    appId: "1:682631129610:web:0ab1f69e3a446ffc870df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)