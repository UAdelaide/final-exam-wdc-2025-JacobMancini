var express = require('express');
var router = expressRouter();

let db;


router.get('/dogs', async (req, res) => {
    try {
        const[rows] = await db.execute('SELECT * FROM Dogs');
    }
    catch (err) {
        res.status(500).json({ error: 'Could not get Dogs' });
    }
});
