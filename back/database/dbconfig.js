const mysql      = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ovocompao',
    database : 'todos',
    port     : 8889
});

module.exports = db;