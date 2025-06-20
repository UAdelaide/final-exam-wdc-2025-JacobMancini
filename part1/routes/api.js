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
            SELECT wr.request_id, d.name AS dog_name, wr.requested_time, wr.duration_minutes, wr.location, u.username AS owner_username
            FROM WalkRequests wr
            JOIN Dogs d ON wr.dog_id = d.dog_id
            JOIN Users u ON d.owner_id = u.user_id
            WHERE wr.status = 'open'
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get open walk requests' });
    }
});

router.get('/walkers/summary', async (req, res) => {
    try {
        const[rows] = await db.execute(`
            SELECT u.username AS walker_username,
            COUNT(wr.rating_id) AS total_ratings,
            ROUND(AVG(wr.rating), 1) AS average_rating,
            (
                SELECT COUNT(*)
                FROM WalkRequests wrq
                JOIN WalkApplications wa ON wa.request_id = wrq.request_id
                WHERE wa.walker_id = u.user_id AND wrq.status = 
            )
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Could not get walker summaries' });
    }
});



module.exports = { router, setDatabase };
