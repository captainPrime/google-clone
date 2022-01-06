import {firebase} from 'firebase/app/'
import 'firebase/storage'
import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';
import config from "../utils/config";

interface payloadFormat {
  name: string
}

const app = initializeApp(config);
export const db = getFirestore(app);

export const getDocument = async (name: string) => {
  return await getDocs(collection(db, name));
}

export const createDocument = async (name: string, payload: payloadFormat) => {
  return await addDoc(collection(db, name), payload)
}

export const deleteDocument = async (name: string, id: string) => {
  const urlID = doc(db, name, id)
 return await deleteDoc(urlID); 
}

export const storage = firebase.storage()