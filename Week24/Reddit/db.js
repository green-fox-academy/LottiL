const mysql = require('mysql2');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FGSz',
    database: 'reddit',
});

module.exports = conn