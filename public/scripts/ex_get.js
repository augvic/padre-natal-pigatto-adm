// scripts/admin/list_people.js
import { db } from "../../firebase/firebase-config.js";

import {  getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";



// Carrega presidentes
async function carregarAnciao() {
    const q = query(collection(db, "pessoa"), where('privilegio', "==", "Ancião"));
    const snapshot = await getDocs(q);

    // Extrai e ordena os nomes
    const nomes = snapshot.docs
    .map(doc => doc.data().nome_visualizacao)
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));

    const selects = [
        "fpresidente",
        "estudo_biblico",
        "orador_necessidades"
      ];

    preencherSelects(nomes, selects);

}