import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/compat/firestore";


const FirebaseConfig = {
  apiKey: "AIzaSyCPwnsmcyAS_UcL2lJenmmhmDCg3h4Bn9I",
  authDomain: "foodapp-962f1.firebaseapp.com",
  projectId: "foodapp-962f1",
  storageBucket: "foodapp-962f1.appspot.com",
  messagingSenderId: "60554547761",
  appId: "1:60554547761:web:f0a525c736cddcba163b10"
};
if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig)
}

export { firebase };