const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()

module.exports = async function nodeMailer(emailUser, nameUser, surnameUser, messageUser) {

    const transporter = nodemailer.createTransport({
        host: process.env.GM_HOST,
        port: process.env.GM_PORT,
        secure: true,
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASS
        }
    })

    await transporter.sendMail({
        to: process.env.GM_EMAIL,
        subject: "MENSAGEM DO PORTÓFIO",
        html: `<div><h2>${nameUser} ${surnameUser} te mandou uma mensagem pelo seu portófio</h2><br/><span style="font-size: 15px">${nameUser} ${surnameUser}<br/>${emailUser}</span><br/><br/><p style="font-size:17px;">${messageUser}</p></div>`
    })

}