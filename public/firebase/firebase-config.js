import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA_GNPrxcv2DpCcTD65e-beuNRO5wE76hc",
    authDomain: "padre-piggatto-adm.firebaseapp.com",
    projectId: "padre-piggatto-adm",
    storageBucket: "padre-piggatto-adm.firebasestorage.app",
    messagingSenderId: "906464324093",
    appId: "1:906464324093:web:f07ce65ce64798d2451194",
    measurementId: "G-K84E5ZKLHD"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
