// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "albion-blog.firebaseapp.com",
  projectId: "albion-blog",
  storageBucket: "albion-blog.appspot.com",
  messagingSenderId: "173586644428",
  appId: "1:173586644428:web:ad1d71f9a89e9eb3693169",
  measurementId: "G-WSBXGH12VX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

