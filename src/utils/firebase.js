// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD79b7NlEUTA2z20evmZycI1Vo573ysG2c",
  authDomain: "netflixgpt-93841.firebaseapp.com",
  projectId: "netflixgpt-93841",
  storageBucket: "netflixgpt-93841.firebasestorage.app",
  messagingSenderId: "536157000027",
  appId: "1:536157000027:web:d6ed0954672b7f993f0a7e",
  measurementId: "G-JNJ9GQSFYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();