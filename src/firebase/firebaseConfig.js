
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr-BQTR8aTtjGe1fVW7X-qvWJrUr4YrO8",
  authDomain: "scic-a10.firebaseapp.com",
  projectId: "scic-a10",
  storageBucket: "scic-a10.appspot.com",
  messagingSenderId: "1040506001841",
  appId: "1:1040506001841:web:ac5b4fdbadf93337c10590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)