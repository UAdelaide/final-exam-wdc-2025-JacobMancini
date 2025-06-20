var express = require('express');
var router = expressRouter();

let db;


router.get('/dogs', async (req, res) => {
    try {
        const[rows] = await
    }
    catch (err) {
        res.status(500).json({ error: 'Could not get Dogs' });
    }
});
