// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // COLAR AQUI O CÓDIGO DE ACESSO AO FIREBASE
  apiKey: "AIzaSyC5HU7QtmMyTj3s_BBjAQlkmL9khV78YQo",
  authDomain: "banco01-5217b.firebaseapp.com",
  projectId: "banco01-5217b",
  storageBucket: "banco01-5217b.appspot.com",
  messagingSenderId: "139408075881",
  appId: "1:139408075881:web:9f82b01350c2e93d0d46f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);