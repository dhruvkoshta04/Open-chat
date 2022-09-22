
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDksAyiJV3bxZMd1bHCwpTSWoXVf1MEVfY",
  authDomain: "open-chat-bc31f.firebaseapp.com",
  projectId: "open-chat-bc31f",
  storageBucket: "open-chat-bc31f.appspot.com",
  messagingSenderId: "841997701301",
  appId: "1:841997701301:web:e3f3bb62c7103ccc20eefc",
  measurementId: "G-GGDHW49183"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)