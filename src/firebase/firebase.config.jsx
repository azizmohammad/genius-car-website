// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlgGIXcKTshDdW7-Uc-jmJnT5oxkeX7fU",
    authDomain: "genius-car-163fc.firebaseapp.com",
    projectId: "genius-car-163fc",
    storageBucket: "genius-car-163fc.appspot.com",
    messagingSenderId: "115934994354",
    appId: "1:115934994354:web:9ea659a1946a732bea4eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;