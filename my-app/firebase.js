// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_E-HiEpiSnOPnrOs3289MpzR0xXDCby4",
  authDomain: "reactnative-a5590.firebaseapp.com",
  projectId: "reactnative-a5590",
  storageBucket: "reactnative-a5590.appspot.com",
  messagingSenderId: "77025940211",
  appId: "1:77025940211:web:aa43a6aea538d437a15d86",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// import * as firebase from "firebase";
// import "@firebase/auth";
// import "@firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_KEY_HERE_AIzaSyAOWH",
//   authDomain: "your-auth-domain-b1234.firebaseapp.com",
//   databaseURL: "https://your-database-name.firebaseio.com",
//   projectId: "your-project-id-1234",
//   storageBucket: "your-project-id-1234.appspot.com",
//   messagingSenderId: "12345-insert-yourse",
//   appId: "insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export { firebase };
