// Import Axios with 'get' method
const axios = require('axios').default;

const fetchData = async () => {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sg-mdh-api.mpa.gov.sg/v1/vessel/positions/snapshot',
      headers: { 
        'Apikey': 'u3L8hZYt1ZrzRGj7pDAuVtQZh1tnL2en', 
        'Cookie': 'visid_incap_2747328=jCAjC9CqRi2+NLUTWO4eJixik2UAAAAAQUIPAAAAAACWUdEqwdWKt6EZhucqWzs4'
      }
    };

    // Use axios.get instead of axios.request
    const response = await axios.get(config.url, { headers: config.headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = fetchData;
