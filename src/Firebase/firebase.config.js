// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWtdDrZMfRiVsLHMxK6McJ_1t1WY6rxxY",
    authDomain: "the-artistic-resale.firebaseapp.com",
    projectId: "the-artistic-resale",
    storageBucket: "the-artistic-resale.appspot.com",
    messagingSenderId: "752470992450",
    appId: "1:752470992450:web:c832338672d3fe3e806fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;