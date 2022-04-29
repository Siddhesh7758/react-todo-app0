import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr1tMcZ3ampMNpUXRsPj9lyAyw2f5Vpf0",
  authDomain: "react-todo-app0.firebaseapp.com",
  projectId: "react-todo-app0",
  storageBucket: "react-todo-app0.appspot.com",
  messagingSenderId: "789826351231",
  appId: "1:789826351231:web:8a8ee782d490da7207cf4a",
  measurementId: "G-7028Y8ZRTN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export {app, auth, db};
