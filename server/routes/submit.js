const express = require('express');
const axios = require('axios');
const router = express.Router();
const { createDeal } = require('../utils/pipedrive');

router.post('/', async (req, res) => {
  const formData = req.body;
  try {
    const response = await createDeal(formData);
    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
