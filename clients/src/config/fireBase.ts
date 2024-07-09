//cấu hình firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBAE ,
  authDomain: "project-module4-react.firebaseapp.com",
  projectId: "project-module4-react",
  storageBucket: "project-module4-react.appspot.com",
  messagingSenderId: "539770309523",
  appId: "1:539770309523:web:55c860821cf74bfb573666",
  measurementId: "G-SKGZJLWLWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);