var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'DogWalkService',
    waitForConnections: 'true',
    
});

module.exports = pool;
