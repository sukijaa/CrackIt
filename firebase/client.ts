import { initializeApp, getApp, getApps } from "firebase/app";
 import { getAuth } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';
 
 const firebaseConfig = {
    apiKey: "AIzaSyAxFlBa9aBWl39JiBldJLyQBm2oDSj_cWc",
    authDomain: "crackit-26808.firebaseapp.com",
    projectId: "crackit-26808",
    storageBucket: "crackit-26808.firebasestorage.app",
    messagingSenderId: "944458055473",
    appId: "1:944458055473:web:6a789c7501eaa5b3d0fa10",
    measurementId: "G-3WRG2BLT6V"
  };
 
 const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 
 export const auth = getAuth(app);
 export const db = getFirestore(app)

