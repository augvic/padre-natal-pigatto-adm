import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';
import { db } from '../firebase/firebase.js';

const form = document.getElementById('register-form');
const enviadoAprovacao = document.getElementById('cadastro-aprovacao');
const erroAprovacao = document.getElementById('erro-aprovacao');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    try {
        await addDoc(collection(db, 'cadastros_pendentes'), {
            email: email,
            senha: password,
            aprovado: false
        });
        console.log('Cadastro enviado para aprovação.')
        enviadoAprovacao.style.display = 'block';
        form.reset();

    } catch (error) {
        console.error('Erro ao registrar cadastro pendente:', error);
        erroAprovacao.style.display = 'block';
    }
});