// ================================================== //

// ~~ Importações do Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// ~~ Configuração do projeto.
const firebaseConfig = {
  apiKey: "AIzaSyA906JOILFOvZH6T6vQ0vRXrfmhwjY1TFE",
  authDomain: "padre-natal-pigatto-adm.firebaseapp.com",
  projectId: "padre-natal-pigatto-adm",
  storageBucket: "padre-natal-pigatto-adm.firebasestorage.app",
  messagingSenderId: "349218455904",
  appId: "1:349218455904:web:1928c049502abdde6b5e05",
  measurementId: "G-96WPW457M2"
};

// ~~ Inicialização do projeto e recursos.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ~~ Exporta recursos.
export { db, auth };

// ================================================== //