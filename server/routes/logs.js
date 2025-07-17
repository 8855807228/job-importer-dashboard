// Express route to fetch import logs
const express = require('express');
const router = express.Router();
const ImportLog = require('../models/ImportLog');

router.get('/logs', async (req, res) => {
  try {
    const logs = await ImportLog.find().sort({ timestamp: -1 }).limit(50);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
