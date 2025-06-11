const axios = require('axios');

const getDietPlan = async (userData) => {
  try {
    const res = await axios.post('http://localhost:8000/recommend-diet', userData);
    return res.data;
  } catch (err) {
    throw new Error('Diet plan service error: ' + err.message);
  }
};

module.exports = { getDietPlan };
