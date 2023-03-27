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
// const firebaseConfig = {
//   apiKey: "AIzaSyDNjbS8S1HaMb1KjJ2Luljod5bQGBuZ2zA",
//   authDomain: "btech-dum-biryani-b6e01.firebaseapp.com",
//   projectId: "btech-dum-biryani-b6e01",
//   storageBucket: "btech-dum-biryani-b6e01.appspot.com",
//   messagingSenderId: "1031524510142",
//   appId: "1:1031524510142:web:e1c31a90013f9b6f80f1ef"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDG8mnqRCwM-9caeZWGDYguc8a4hrtYAro",
//   authDomain: "btech-biriyani-2.firebaseapp.com",
//   projectId: "btech-biriyani-2",
//   storageBucket: "btech-biriyani-2.appspot.com",
//   messagingSenderId: "814818715979",
//   appId: "1:814818715979:web:604231762895fb06bde0ce"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC3Xz9fjbOv1hOicUnHeiKOi2iw715irhE",
  authDomain: "btech-biryani-54b68.firebaseapp.com",
  projectId: "btech-biryani-54b68",
  storageBucket: "btech-biryani-54b68.appspot.com",
  messagingSenderId: "157791887305",
  appId: "1:157791887305:web:c1e1371e2a076a1e19d218"
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


