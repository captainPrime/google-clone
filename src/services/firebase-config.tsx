import  {initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCKOnMeLTdTI99HZ4k6kA83EcWLdTBNMLs",
  authDomain: "clone-efd4a.firebaseapp.com",
  projectId: "clone-efd4a",
  storageBucket: "clone-efd4a.appspot.com",
  messagingSenderId: "704300523499",
  appId: "1:704300523499:web:d0edf99cde4480b12403ae",
  measurementId: "G-LTB7FSN2KX"
  };

  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  

 