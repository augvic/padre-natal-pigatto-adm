// ================================================== //

// ~~ Importa recursos.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// ================================================== //

// ~~ Puxa as variáveis de ambiente do Firebase.
const emailUsuario = functions.config().email.usuario;
const emailSenha = functions.config().email.senha;
const emailTo = functions.config().email.to;

// ================================================== //

// ~~ Inicia o admin e db.
admin.initializeApp();
const db = admin.firestore();

// ================================================== //

// ~~ Cria o transporter do e-mail.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUsuario,
        pass: emailSenha
    }
});

// ================================================== //

// ~~ Ao receber novo cadastro, dispara um e-mail para aprovação.
exports.notificarNovoCadastro = functions.firestore
    .document('cadastros_pendentes/{cadastroId}')
    .onCreate(async (snap, context) => {
        const data = snap.data();
        const mailOptions = {
            from: 'Cadastro Bot <seuemail@gmail.com>',
            to: emailTo,
            subject: 'Novo cadastro aguardando aprovação',
            html: `
                <p><strong>Nome:</strong> ${data.nome}</p>
                <p><strong>Cargo:</strong> ${data.cargo}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Senha:</strong> ${data.senha}</p>
                <p><a href="https://APROVACAO.com?email=${data.email}&senha=${data.senha}">Aprovar cadastro</a></p>
            `
            };
        try {
            await transporter.sendMail(mailOptions);
            console.log('Email enviado com sucesso.');
        } catch (error) {
            console.error('Erro ao enviar email:', error);
        }
    });

// ================================================== //