// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4QiK-DZtlBKKimukdBq6Jy8p3nA7EQ8M",
    authDomain: "ch-ecommerce-react.firebaseapp.com",
    projectId: "ch-ecommerce-react",
    storageBucket: "ch-ecommerce-react.appspot.com",
    messagingSenderId: "882119253582",
    appId: "1:882119253582:web:530a0e1284fa25f4dded1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);