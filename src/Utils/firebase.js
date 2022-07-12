// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// apiKey: "AIzaSyDnl9t4wdjZ2Clw2s6j1RrIENWU5frJX9w",
// authDomain: "waldi-rabin-karp.firebaseapp.com",
// databaseURL:
//   "https://waldi-rabin-karp-default-rtdb.asia-southeast1.firebasedatabase.app",
// projectId: "waldi-rabin-karp",
// storageBucket: "waldi-rabin-karp.appspot.com",
// messagingSenderId: "453586189015",
// appId: "1:453586189015:web:a1daee81d5d4f2d0d10e92",
// measurementId: "G-36ZT22GXQ1",
const firebaseConfig = {
  apiKey: "AIzaSyAJfquSXmuNUzqmIrNpQ7d6Ktp6mM8J4GA",
  authDomain: "nauval-plagiarism-detector.firebaseapp.com",
  projectId: "nauval-plagiarism-detector",
  storageBucket: "nauval-plagiarism-detector.appspot.com",
  messagingSenderId: "1094977216030",
  appId: "1:1094977216030:web:50ea47fce62afb8af8d80f",
  measurementId: "G-H1KBW5CB9X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const rtdb = firebaseApp.database();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, rtdb, storage };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from "firebase"
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDnl9t4wdjZ2Clw2s6j1RrIENWU5frJX9w",
//   authDomain: "waldi-rabin-karp.firebaseapp.com",
//   databaseURL: "https://waldi-rabin-karp-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "waldi-rabin-karp",
//   storageBucket: "waldi-rabin-karp.appspot.com",
//   messagingSenderId: "453586189015",
//   appId: "1:453586189015:web:a1daee81d5d4f2d0d10e92",
//   measurementId: "G-36ZT22GXQ1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const rtdb = app.database()
