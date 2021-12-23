import  {initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {

  };

  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  

 
