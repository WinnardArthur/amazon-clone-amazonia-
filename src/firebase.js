// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBIZLvFtUJaRDxcBBg8iMXhKIeuMWPmB48",
    authDomain: "ecommerce-ia-bad32.firebaseapp.com",
    projectId: "ecommerce-ia-bad32",
    storageBucket: "ecommerce-ia-bad32.appspot.com",
    messagingSenderId: "887949917891",
    appId: "1:887949917891:web:cd8764b7cdf0dac945ec76",
    measurementId: "G-LXZ5H26644"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth };