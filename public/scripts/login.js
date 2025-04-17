// ================================================== //

// ~~ Importa o Firebase config.
import { auth } from '../firebase/firebase.js';

// ~~ Importa o módulo de autenticação do Firebase.
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

// ~~ Coleta elementos de login.
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-btn');
const errorMessage = document.getElementById('login-error')

// ~~ Adiciona o event listener ao botão de submit do formulário.
loginButton.addEventListener('click', async (event) => {

  // ~~ Evita recarregamento da página.
  event.preventDefault();

  // ~~ Coleta valores dos inputs.
  const email = emailInput.value;
  const password = passwordInput.value;

  // ~~ Usa o Firebase Auth para fazer login.
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Sucesso ao logar: ', user)
    window.location.href = 'pages/dashboard.html';
  
  // ~~ Se login for inválido.
  } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      errorMessage.style.display = 'block';
    }
});

// ================================================== //