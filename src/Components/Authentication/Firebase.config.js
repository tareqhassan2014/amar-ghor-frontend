
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUYU9ZDDdR4ntw8CsFqvucahCHY4Awnm0",
  authDomain: "amar-ghor.firebaseapp.com",
  projectId: "amar-ghor",
  storageBucket: "amar-ghor.appspot.com",
  messagingSenderId: "278298807352",
  appId: "1:278298807352:web:1ff5429c5bd487f5d36acd",
  measurementId: "G-SPRPT1BLN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);