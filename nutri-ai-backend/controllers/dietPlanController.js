const axios = require('axios');
const DietPlan = require('../models/dietPlanModel');

exports.recommendDiet = async (req, res) => {
  try {
    const userId = req.user.id;

    // Flask microservice ko POST request bhejna
    const response = await axios.post('http://localhost:8000/recommend-diet', req.body);

    const dietPlans = response.data; // Ab ye 7 days ka array hoga

    if (Array.isArray(dietPlans)) {
      // Save each day ka plan database mein (optional)
      for (const dayPlan of dietPlans) {
        await DietPlan.create({
          user_id: userId,
          Age: req.body.Age,
          Gender: req.body.Gender,
          BMI: req.body.BMI,
          BMI_Category: req.body.BMI_Category,
          Activity_Level: req.body.Activity_Level,
          Diabetes: req.body.Diabetes,
          Diet_Preference: req.body.Diet_Preference,
          Calories: dayPlan.Calories,
          Protein: dayPlan.Protein,
          Carbs: dayPlan.Carbs,
          Fats: dayPlan.Fats,
          Fiber: dayPlan.Fiber,
          Breakfast: dayPlan.Breakfast,
          Lunch: dayPlan.Lunch,
          Dinner: dayPlan.Dinner,
          Note: dayPlan.Note,
          pdf_path: null
        });
      }
    } else {
      return res.status(500).json({ message: 'Invalid diet plan format from AI service' });
    }

    res.json(dietPlans);
  } catch (error) {
    console.error('Error fetching or saving diet plan:', error.message);
    res.status(500).json({ message: 'Failed to get or save diet plan', error: error.message });
  }
};
