// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj9-9hoReJUXfpqtgW_-M5mxU4yT9A7qM",
  authDomain: "storm-authentication-mandkh.firebaseapp.com",
  projectId: "storm-authentication-mandkh",
  storageBucket: "storm-authentication-mandkh.appspot.com",
  messagingSenderId: "418099170812",
  appId: "1:418099170812:web:635b20ec1670771c713679",
  measurementId: "G-V2680TXVQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

