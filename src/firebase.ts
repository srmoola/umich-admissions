import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfQJHwagNYWYFNg46G3t6Ygr_kDKhyImA",
    authDomain: "umichadmissionscalc.firebaseapp.com",
    projectId: "umichadmissionscalc",
    storageBucket: "umichadmissionscalc.appspot.com",
    messagingSenderId: "179926995613",
    appId: "1:179926995613:web:b0002f163daf9a8749ba74"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const firestore = getFirestore(app);

// Enable persistence
setPersistence(auth, browserLocalPersistence);

export { auth };
export const googleprovider = new GoogleAuthProvider();