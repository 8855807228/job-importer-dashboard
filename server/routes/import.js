// Express route to trigger manual job import
const express = require('express');
const router = express.Router();
const importQueue = require('../queues/importQueue');

router.post('/import', async (req, res) => {
  try {
    await importQueue.add('import-jobs', {});
    res.json({ success: true, message: 'Import triggered.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
