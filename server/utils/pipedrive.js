const axios = require('axios');

const PIPEDRIVE_API_TOKEN = process.env.API_TOKEN;
const PIPEDRIVE_API_BASE_URL = 'https://api.pipedrive.com/v1';

async function updateDeal(dealId, formData) {
  try {
    const response = await axios.put(
      `${PIPEDRIVE_API_BASE_URL}/deals/${dealId}?api_token=${PIPEDRIVE_API_TOKEN}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error('Pipedrive API error:', error.response ? error.response.data : error.message); 
    throw new Error(`Pipedrive API Error: ${error.response ? error.response.data.error : error.message}`);
  }
}

module.exports = { updateDeal };
