// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDF87S_orSgWcm8tlFybP8TE0GZCWFOsc",
  authDomain: "vite-project-2ea6d.firebaseapp.com",
  projectId: "vite-project-2ea6d",
  storageBucket: "vite-project-2ea6d.appspot.com",
  messagingSenderId: "155266683688",
  appId: "1:155266683688:web:f42816f2f75df8c720f61d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);