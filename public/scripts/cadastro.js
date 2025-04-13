// ================================================== //

// ~~ Importações do Firebase.
import { getFirestore, collection, setDoc, doc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';
import { db } from '../firebase/firebase.js';

// ~~ Coleta elementos.
const form = document.getElementById('register-form');
const nome = document.getElementById('nome');
const cargo = document.getElementById('cargo');
const enviadoAprovacao = document.getElementById('cadastro-aprovacao');
const erroAprovacao = document.getElementById('erro-aprovacao');

// ~~ Event listener no formulário para solicitar um cadastro.
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome = form.nome.value;
    const cargo = form.cargo.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
        const docId = crypto.randomUUID();
        await setDoc(doc(db, 'cadastros_pendentes', docId),
            {
                nome: nome,
                cargo: cargo,
                email: email,
                senha: password,
                aprovado: false
            }
        );
        console.log('Cadastro enviado para aprovação.')
        enviadoAprovacao.style.display = 'block';
        form.reset();
    } catch (error) {
        console.error('Erro ao registrar cadastro pendente:', error);
        erroAprovacao.style.display = 'block';
    }
});

// ================================================== //