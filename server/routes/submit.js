const express = require('express');
const { updateDeal } = require('../utils/pipedrive');
const router = express.Router();

router.post('/', async (req, res) => {
  const { dealId, ...formData } = req.body;
  try {
    const response = await updateDeal(dealId, formData);
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Error updating deal:', error.message); 
    if (error.response) {
      console.error('Response data:', error.response.data); 
    }
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
