import * as firebase from 'firebase';

//import "firebase/auth";
// import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyCSTOTi9RXmL_Ufs5vJhqA7V1hDbB042iw",
    authDomain: "gramado-fb.firebaseapp.com",
    databaseURL: "https://gramado-fb-default-rtdb.firebaseio.com",
    projectId: "gramado-fb",
    storageBucket: "gramado-fb.appspot.com",
    messagingSenderId: "391298451787",
    appId: "1:391298451787:web:e5e3c22303050faeb1c0ce",
    measurementId: "G-1B49B4EQ64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();