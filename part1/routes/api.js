var express = require('express');
var router = express.Router();

let db;
function setDatabase(database) {
    db = database;
}

router.get('/dogs', async (req, res) => {
    try {
        const[rows] = await db.execute('SELECT * FROM Dogs');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get Dogs' });
    }
});



module.exports = { router, setDatabase };
