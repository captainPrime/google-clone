import  {initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { collection, getDocs, addDoc } from 'firebase/firestore';

import config from "../utils/config";

interface payloadFormat  {
    name: string
}

const app = initializeApp(config);
export const db = getFirestore(app);  

export const getDocument = async (name: string) => {
  return await getDocs(collection(db, name));
} 

export const createDocument = async (name: string, payload: payloadFormat  ) => {
  return await addDoc(collection(db, name), payload )
}