const express = require('express');
const app = express();
const config = require('./config');


// app.use((req, res) => {
//     res.send("funcionando")
// })


const PORT = config.devPort.DEV_PORT
app.listen(PORT, () => {
    console.log("Servidor sendo executado...");
})