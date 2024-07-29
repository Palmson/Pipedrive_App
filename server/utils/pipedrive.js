const axios = require('axios');

const apiToken = process.env.API_TOKEN;
const companyDomain = process.env.COMPANY_DOMAIN;

const customFieldKeys = {
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
  technician: process.env.TECH_FIELD
};

const updateDeal = (dealId, formData) => {
  const apiUrl = `https://${companyDomain}.pipedrive.com/api/v1/deals/${dealId}?api_token=${apiToken}`;

  const dealData = {
    custom_fields: {
      [customFieldKeys.client]: `${formData.firstName} ${formData.lastName}`,
      [customFieldKeys.phone]: formData.phone,
      [customFieldKeys.email]: formData.email,
      [customFieldKeys.jobType]: formData.jobType,
      [customFieldKeys.jobSource]: formData.jobSource,
      [customFieldKeys.jobDescription]: formData.jobDescription,
      [customFieldKeys.address]: formData.address,
      [customFieldKeys.city]: formData.city,
      [customFieldKeys.state]: formData.state,
      [customFieldKeys.zipCode]: formData.zipCode,
      [customFieldKeys.area]: formData.area,
      [customFieldKeys.startDate]: formData.startDate,
      [customFieldKeys.startTime]: formData.startTime,
      [customFieldKeys.endTime]: formData.endTime,
      [customFieldKeys.technician]: formData.techSelect
    }
  };

  return axios.put(apiUrl, dealData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

module.exports = { updateDeal };
