import firebase from "firebase/app";
import "firebase/storage";

import "firebase/firebase-storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBtw8YW0WgOfP0P-FY57aqHtK4LgqOb1fA",
  authDomain: "fotofire-app.firebaseapp.com",
  projectId: "fotofire-app",
  storageBucket: "fotofire-app.appspot.com",
  messagingSenderId: "24071698256",
  appId: "1:24071698256:web:3175b29d253199ae6a9e55",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
