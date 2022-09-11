// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIQP4uoCQGz6jYw0qrtE9nM3FG6koZgIY",
  authDomain: "gym-assistant-29736.firebaseapp.com",
  projectId: "gym-assistant-29736",
  storageBucket: "gym-assistant-29736.appspot.com",
  messagingSenderId: "846002176313",
  appId: "1:846002176313:web:e0d2b514afc5af8c77e8e8",
  measurementId: "G-J0C3JK4DYC",
  databaseURL: "https://gym-assistant-29736-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, analytics, auth, db };
