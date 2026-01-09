import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGGsiycJnPEu_YdIVQsrYzGs_-VINtGjk",
  authDomain: "todoapp-e8f91.firebaseapp.com",
  projectId: "todoapp-e8f91",
  storageBucket: "todoapp-e8f91.firebasestorage.app",
  messagingSenderId: "1059192340310",
  appId: "1:1059192340310:web:58bd0280dc428b3641e0f7"
};


 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);