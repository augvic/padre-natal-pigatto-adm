const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'sua_senha_de_aplicativo'
    }
});

exports.notificarNovoCadastro = functions.firestore
    .document('cadastros_pendentes/{cadastroId}')
    .onCreate(async (snap, context) => {
        const data = snap.data();

        const mailOptions = {
            from: 'Cadastro Bot <seuemail@gmail.com>',
            to: 'SEU_EMAIL_DE_ADMIN@exemplo.com',
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