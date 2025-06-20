var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'DogWalkService',
    waitForConnections: 'true',
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
