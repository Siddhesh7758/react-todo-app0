import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCA-9mRIlaBaPK2_wRgAfzSmpDc5zD2Zo",
  authDomain: "fir-todo-app-cfccb.firebaseapp.com",
  projectId: "fir-todo-app-cfccb",
  storageBucket: "fir-todo-app-cfccb.appspot.com",
  messagingSenderId: "1086311305896",
  appId: "1:1086311305896:web:b17423bcb3fff8b491e89d"
});

// Initialize Firebase

const db = firebaseApp.firestore();

export default db;
