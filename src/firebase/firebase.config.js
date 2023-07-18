// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOkVK4MMOXOhPN9rlX3VxSEhiquB37x4E",
    authDomain: "toy-market-website-client.firebaseapp.com",
    projectId: "toy-market-website-client",
    storageBucket: "toy-market-website-client.appspot.com",
    messagingSenderId: "1059164192476",
    appId: "1:1059164192476:web:9c3e6eb44e686313cdbe19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;