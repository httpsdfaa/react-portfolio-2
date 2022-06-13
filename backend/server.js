const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./db')


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors())


app.post("/api/form", (req, res) => {

    const { name, surname, email, message } = req.body

    const dataBody = {
        name,
        surname,
        email,
        message
    }

    // const sendDB = () => {
    //     db(
    //         dataBody.name,
    //         dataBody.surname,
    //         dataBody.email,
    //     )
    // }

    // sendDB();

    res.send("dados enviado")
})


const PORT = config.devPort.DEV_PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor sendo executado na porta ${PORT}`);
})