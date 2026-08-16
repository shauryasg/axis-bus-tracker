// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAD05rFiZvl0_MYFV2PHg58p48zw3LLMho",
  authDomain: "campus-ride-77afe.firebaseapp.com",
  databaseURL: "https://campus-ride-77afe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "campus-ride-77afe",
  storageBucket: "campus-ride-77afe.firebasestorage.app",
  messagingSenderId: "542967063243",
  appId: "1:542967063243:web:2eb4461ff32534b53ab14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, update, onValue };