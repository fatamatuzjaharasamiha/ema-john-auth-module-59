// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP25pJRRsS-0PyBrZsWZYUVKnwZuZ041E",
    authDomain: "ema-john-simple-e2834.firebaseapp.com",
    projectId: "ema-john-simple-e2834",
    storageBucket: "ema-john-simple-e2834.appspot.com",
    messagingSenderId: "1080514650168",
    appId: "1:1080514650168:web:0e17515171cc9b96f646cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;