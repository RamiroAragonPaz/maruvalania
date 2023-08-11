// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYi3MxPNg67up5zCGLUiYIjlVJZ3uo6-k",
  authDomain: "maruvalaniaecommerce.firebaseapp.com",
  projectId: "maruvalaniaecommerce",
  storageBucket: "maruvalaniaecommerce.appspot.com",
  messagingSenderId: "62047642199",
  appId: "1:62047642199:web:afead1286705914466f912",
  measurementId: "G-CQS805SSVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db