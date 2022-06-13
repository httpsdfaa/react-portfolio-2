const axios = require('axios');
const config = require('../config/config')

module.exports = (nameParam, surnameParam, emailParam, messageParam) => {

    const url = config.development.url
    axios({
        method: "post",
        url: url,
        data: {
            name: nameParam,
            surname: surnameParam,
            email: emailParam,
            message: messageParam
        }
    })
}