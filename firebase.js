// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2YGjc-ocZepnLRR74GkJ0nS3hKW7eyFs",
  authDomain: "react-native-instagram-cd148.firebaseapp.com",
  projectId: "react-native-instagram-cd148",
  storageBucket: "react-native-instagram-cd148.appspot.com",
  messagingSenderId: "829723254225",
  appId: "1:829723254225:web:6c353fb2fda05329e9d4f0",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };

// const app = initializeApp(firebaseConfig);

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;
