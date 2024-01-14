import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCPwnsmcyAS_UcL2lJenmmhmDCg3h4Bn9I",
    authDomain: "foodapp-962f1.firebaseapp.com",
    projectId: "foodapp-962f1",
    storageBucket: "foodapp-962f1.appspot.com",
    messagingSenderId: "60554547761",
    appId: "1:60554547761:web:f0a525c736cddcba163b10"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);

export{ db, storage}