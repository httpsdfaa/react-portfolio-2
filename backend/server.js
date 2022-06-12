const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(cors())


app.post("/", jsonParser, urlencodedParser, (req, res) => {
    // console.log(req.body)
})


const PORT = config.devPort.DEV_PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor sendo executado na porta ${PORT}`);
})