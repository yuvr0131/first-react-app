// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi-en9bNcrAta_dQZfyZllSylwcv6vJp8",
  authDomain: "food-app-ea3fe.firebaseapp.com",
  projectId: "food-app-ea3fe",
  storageBucket: "food-app-ea3fe.appspot.com",
  messagingSenderId: "641168500919",
  appId: "1:641168500919:web:fc73d90fbb1ffc5a794532",
  measurementId: "G-MH4XPEEQ1J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
