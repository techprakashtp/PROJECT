//import firebase from ‘firebase’;
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyD3yMEHM7LpZFRUf0-Jqv6fU_GN3ISigps",
    authDomain: "fire-base-login-app-dafe9.firebaseapp.com",
    databaseURL: "https://fire-base-login-app-dafe9.firebaseio.com",
    projectId: "fire-base-login-app-dafe9",
    storageBucket: "fire-base-login-app-dafe9.appspot.com",
    messagingSenderId: "895652671945",
    appId: "1:895652671945:web:6e2cef833414158af3b818",
    measurementId: "G-3Q79CJT9TP"
    };
    // Initialize Firebase
 // var Firebase=firebase.initializeApp(firebaseConfig);

  firebase.database().ref('credentials/').on('value').then(function(jyoti) {
    console.log(jyoti.val());
   });
  export default Firebase;
  //console.log("init success");
  