import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "blog-85ce6.firebaseapp.com",
  projectId: "blog-85ce6",
  storageBucket: "blog-85ce6.appspot.com",
  messagingSenderId: "214503324857",
  appId: "1:214503324857:web:3a4d49c23c29d31fa2af68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };