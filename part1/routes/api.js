var express = require('express');
var router = express.Router();

let db;
function setDatabase(database) {
    db = database;
}

router.get('/dogs', async (req, res) => {
    try {
        const[rows] = await db.execute(`
            SELECT d.name AS dog_name, d.size, u.username AS owner_username
            FROM Dogs d
            JOIN Users u ON d.owner_id = u.user_id
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get Dogs' });
    }
});

router.get('/walkrequests/open', async (req, res) => {
    try {
        const[rows] = await db.execute(`
            wr.request_id, d.name AS dog_name, wr.requested_time, wr.duration_minutes, 
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get open walk requests' });
    }
});

router.get('/walkers/summary', async (req, res) => {
    try {
        const[rows] = await db.execute(`

        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get walker summaries' });
    }
});



module.exports = { router, setDatabase };
