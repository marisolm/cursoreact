import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUmr_4EazOXTPm7x84gaKPU4mFU6BHZd4",
  authDomain: "react-97175-a7f49.firebaseapp.com",
  projectId: "react-97175-a7f49",
  storageBucket: "react-97175-a7f49.firebasestorage.app",
  messagingSenderId: "132189590132",
  appId: "1:132189590132:web:5042a92f433ab9e96df721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db; 