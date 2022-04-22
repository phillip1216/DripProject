import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCDLtO-Q_RYUxPa5emjHBrsc3AxiMkUXo4",
    authDomain: "drip-eb74d.firebaseapp.com",
    projectId: "drip-eb74d",
    storageBucket: "drip-eb74d.appspot.com",
    messagingSenderId: "546184445387",
    appId: "1:546184445387:web:901970c94231471a684a4e"
};
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const DBService = getFirestore();

export const authService = firebase.auth();