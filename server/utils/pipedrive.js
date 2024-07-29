require('dotenv').config();
const axios = require('axios');

const PIPEDRIVE_API_TOKEN = process.env.API_TOKEN;
const PIPEDRIVE_API_BASE_URL = 'https://api.pipedrive.com/v1';

const customFields = {
  client: process.env.CLIENT_FIELD, 
  phone: process.env.PHONE_FIELD,
  email: process.env.EMAIL_FIELD,
  jobType: process.env.JOBTYPE_FIELD,
  jobSource: process.env.JOBSOURCE_FIELD,
  jobDescription: process.env.JOBDESCRIPTION_FIELD,
  address: process.env.ADDRESS_FIELD,
  city: process.env.CITY_FIELD,
  state: process.env.STATE_FIELD,
  zipCode: process.env.ZIPCODE_FIELD,
  area: process.env.AREA_FIELD,
  startDate: process.env.STARTDATE_FIELD,
  startTime: process.env.STARTTIME_FIELD,
  endTime: process.env.ENDTIME_FIELD,
  techSelect: process.env.TECH_FIELD,
};

async function updateDeal(dealId, formData) {
  try {
    const data = {
      [customFields.client]: `${formData.firstName} ${formData.lastName}`, 
      [customFields.phone]: formData.phone,
      [customFields.email]: formData.email,
      [customFields.jobType]: formData.jobType,
      [customFields.jobSource]: formData.jobSource,
      [customFields.jobDescription]: formData.jobDescription,
      [customFields.address]: formData.address,
      [customFields.city]: formData.city,
      [customFields.state]: formData.state,
      [customFields.zipCode]: formData.zipCode,
      [customFields.area]: formData.area,
      [customFields.startDate]: formData.startDate,
      [customFields.startTime]: formData.startTime,
      [customFields.endTime]: formData.endTime,
      [customFields.techSelect]: formData.techSelect,
    };

    console.log('Updating deal with ID:', dealId);
    console.log('Data being sent to Pipedrive:', data);

    const response = await axios.put(
      `${PIPEDRIVE_API_BASE_URL}/deals/${dealId}?api_token=${PIPEDRIVE_API_TOKEN}`,
      data,
      { headers: { 'Content-Type': 'application/json' } }
    );

    console.log('Response from Pipedrive:', response.data);
    return response.data;
  } catch (error) {
    console.error('Pipedrive API error:', error.response ? error.response.data : error.message);
    throw new Error(`Pipedrive API Error: ${error.response ? error.response.data.error : error.message}`);
  }
}

module.exports = { updateDeal };
