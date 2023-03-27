// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getDatabase} from 'firebase/database'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {ref} from "firebase/database"
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKfivmsCdKh6IcFmZRXNSTM3KFhaK2vo",
  authDomain: "btech-dum-biryani.firebaseapp.com",
  projectId: "btech-dum-biryani",
  storageBucket: "btech-dum-biryani.appspot.com",
  messagingSenderId: "340403363672",
  appId: "1:340403363672:web:2b337e80f5042e41fe0f2d"
};


// Initialize Firebase
const app=initializeApp(firebaseConfig);
const storage = getStorage(app);
const db =getFirestore(app)

export {db ,storage , ref}


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
// const analytics = getAnalytics(app);


