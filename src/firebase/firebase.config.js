// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArvSgPKT5cjnnCG236v9CeTBbjcwIXgKk",
  authDomain: "fir-front-bb56c.firebaseapp.com",
  projectId: "fir-front-bb56c",
  storageBucket: "fir-front-bb56c.firebasestorage.app",
  messagingSenderId: "120675845320",
  appId: "1:120675845320:web:ede9c4727b14dc829611fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
