const db = require('../config/db');

const DietPlan = {
  create: async ({
    user_id,
    Age,
    Gender,
    BMI,
    BMI_Category,
    Activity_Level,
    Diabetes,
    Diet_Preference,
    Calories,
    Protein,
    Carbs,
    Fats,
    Fiber,
    Breakfast,
    Lunch,
    Dinner,
    Note,
    pdf_path
  }) => {
    const [result] = await db.execute(
      `INSERT INTO diet_plans 
      (user_id, Age, Gender, BMI, BMI_Category, Activity_Level, Diabetes, Diet_Preference, Calories, Protein, Carbs, Fats, Fiber, Breakfast, Lunch, Dinner, Note, pdf_path) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, Age, Gender, BMI, BMI_Category, Activity_Level, Diabetes, Diet_Preference, Calories, Protein, Carbs, Fats, Fiber, Breakfast, Lunch, Dinner, Note, pdf_path]
    );
    return result.insertId;
  },

  // Aap additional methods bhi add kar sakte hain jaise findByUserId, update, delete etc.
};

module.exports = DietPlan;
