const mysql = require('mysql2');
const config = require('./config');

module.exports = async (name, surname, email) => {
    const connection = mysql.createConnection({
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database
    })

    const insert_into = 'INSERT INTO `form` (`name`, `surname`, `email`, `registration`) VALUES(?, ?, ?, ?)'
    const values = [name, surname, email, new Date()]

    connection.query(insert_into, values, function (err, results, fields) {
        console.log(results)
        console.log(fields)
        console.log(err)
    })

    await connection.end();
}