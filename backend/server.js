const express = require('express');
const app = express();
const config = require('./config');
// const db = require('./db')

// app.use((req, res) => {
//     res.send("funcionando")
// })


const PORT = config.devPort.DEV_PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor sendo executado na porta ${PORT}`);
})