var express = require('express');
var router = express.Router();

let db;
function setDatabase(database) {
    db = database;
}

router.get('/dogs', async (req, res) => {
    try {
        const[rows] = await db.execute(`
            SELECT `
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get Dogs' });
    }
});

router.get('/walkrequests/open', async (req, res) => {
    try {
        const[rows] = await db.execute(`SELECT * FROM WalkRequests WHERE status = 'open'`);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get open walk requests' });
    }
});

router.get('/walkers/summary', async (req, res) => {
    try {
        const[rows] = await db.execute(`SELECT * FROM WalkRatings`);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get walker summaries' });
    }
});



module.exports = { router, setDatabase };
