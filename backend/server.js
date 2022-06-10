const express = require('express');
const app = express();

// app.use((req, res) => {
//     res.send("funcionando")
// })


app.listen(3001, () => {
    console.log("Servidor sendo executado...");
})