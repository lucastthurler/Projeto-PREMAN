import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7DCtLaNV8PEgVtmC7EOjKk86d2n97W3g",
  authDomain: "controle-presenca-4dcad.firebaseapp.com",
  projectId: "controle-presenca-4dcad",
  storageBucket: "controle-presenca-4dcad.firebasestorage.app",
  messagingSenderId: "358007476565",
  appId: "1:358007476565:web:871145b6ccf69df4051fdc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);