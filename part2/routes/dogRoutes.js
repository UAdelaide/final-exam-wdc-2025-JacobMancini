const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Dog acquisition for select menu
router.get('/name', async (req, res) => {
  const owner_id = req.session.user.user_id;
  const [dogs] = await db.query(`SELECT dog_id, name FROM Dogs WHERE owner_id = ?`, [owner_id]);
  res.json(dogs);
});

// Dog acquisition for table images
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Dogs');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});

module.exports = router;
