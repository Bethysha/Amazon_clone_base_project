import firebase from "firebase/compat/app";

import{getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoERdq1ZYi8QzxmSrfXrn6RrZljo9hZIw",
  authDomain: "clone-2025-b3242.firebaseapp.com",
  projectId: "clone-2025-b3242",
  storageBucket: "clone-2025-b3242.firebasestorage.app",
  messagingSenderId: "1058935940157",
  appId: "1:1058935940157:web:55d37570d541652236f654",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()
