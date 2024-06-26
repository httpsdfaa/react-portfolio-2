const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const db = require('./db');
const sendEmail = require('./nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.get('/', )

app.post("/auth/form", (req, res) => {

    const { name, surname, email, message } = req.body

    const dataBody = {
        name,
        surname,
        email,
        message
    }

    const sendDB = () => {
        db(
            dataBody.name,
            dataBody.surname,
            dataBody.email,
        )
    }

    sendDB();
    res.send("dados enviado")

    sendEmail(
        dataBody.email,
        dataBody.name,
        dataBody.surname,
        dataBody.message
    )

    
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Servidor sendo executado na porta ${PORT}`);
})
