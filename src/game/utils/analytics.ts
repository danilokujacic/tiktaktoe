import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAOZOgsAtWzSe3KyrCvHOexjCAgGlwXY_U",
  authDomain: "tiktaktoe-events.firebaseapp.com",
  projectId: "tiktaktoe-events",
  storageBucket: "tiktaktoe-events.appspot.com",
  messagingSenderId: "215478297108",
  appId: "1:215478297108:web:32864b8840756e65813d01",
  measurementId: "G-JF2KMNP0BQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
