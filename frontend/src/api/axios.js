const axios = require('axios');
const config = require('../config/config')

module.exports = (nameParam, surnameParam, emailParam, messageParam) => {

    const url = config.development.url
    axios.post(url, {

        name: nameParam,
        surname: surnameParam,
        email: emailParam,
        message: messageParam

    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}