var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'DogWalkService',
});

module.exports = pool;
