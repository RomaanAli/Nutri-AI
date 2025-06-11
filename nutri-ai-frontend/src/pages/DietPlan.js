import React, { useState } from 'react';
import './DietPlan.css';

const genderMap = { Male: 0, Female: 1 };
const bmiCategoryMap = { Underweight: 0, Normal: 1, Overweight: 2, Obese: 3 };
const activityLevelMap = { Low: 0, Moderate: 1, High: 2 };
const diabetesMap = { No: 0, Yes: 1 };
const dietPreferenceMap = { Veg: 0, 'Non-Veg': 1 };

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DietPlan = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Gender: '',
    BMI: '',
    BMI_Category: '',
    Activity_Level: '',
    Diabetes: '',
    Diet_Preference: '',
  });

  const [dietPlan, setDietPlan] = useState(null); // Expecting array of 7 days
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    for (let key in formData) {
      if (!formData[key]) {
        setError(`Please fill the ${key} field.`);
        return false;
      }
    }
    if (isNaN(formData.Age) || formData.Age <= 0) {
      setError('Please enter a valid Age');
      return false;
    }
    if (isNaN(formData.BMI) || formData.BMI <= 0) {
      setError('Please enter a valid BMI');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setDietPlan(null);

    try {
      const payload = {
        Age: Number(formData.Age),
        Gender: genderMap[formData.Gender],
        BMI: Number(formData.BMI),
        BMI_Category: bmiCategoryMap[formData.BMI_Category],
        Activity_Level: activityLevelMap[formData.Activity_Level],
        Diabetes: diabetesMap[formData.Diabetes],
        Diet_Preference: dietPreferenceMap[formData.Diet_Preference],
      };

      const token = localStorage.getItem('token');
      if (!token) throw new Error('Please login first.');

      const res = await fetch('http://localhost:5000/api/diet-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Failed to get diet plan');
      }

      const data = await res.json();

      // Expecting data as array of 7 day plans
      if (!Array.isArray(data)) {
        throw new Error('Invalid diet plan format received from server');
      }

      setDietPlan(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '900px', margin: 'auto' }}>
      <h2>Get Your 7 Days Personalized Diet Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="Age"
          type="number"
          placeholder="Age"
          value={formData.Age}
          onChange={handleChange}
        />
        <select name="Gender" value={formData.Gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          name="BMI"
          type="number"
          step="0.1"
          placeholder="BMI"
          value={formData.BMI}
          onChange={handleChange}
        />
        <select
          name="BMI_Category"
          value={formData.BMI_Category}
          onChange={handleChange}
        >
          <option value="">Select BMI Category</option>
          <option value="Underweight">Underweight</option>
          <option value="Normal">Normal</option>
          <option value="Overweight">Overweight</option>
          <option value="Obese">Obese</option>
        </select>
        <select
          name="Activity_Level"
          value={formData.Activity_Level}
          onChange={handleChange}
        >
          <option value="">Select Activity Level</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
        <select name="Diabetes" value={formData.Diabetes} onChange={handleChange}>
          <option value="">Diabetes?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <select
          name="Diet_Preference"
          value={formData.Diet_Preference}
          onChange={handleChange}
        >
          <option value="">Diet Preference</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Diet Plan'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {dietPlan && (
        <div style={{ marginTop: '20px' }}>
          <h3>7 Days Diet Plan</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Day</th>
                <th style={thStyle}>Calories</th>
                <th style={thStyle}>Protein</th>
                <th style={thStyle}>Carbs</th>
                <th style={thStyle}>Fats</th>
                <th style={thStyle}>Fiber</th>
                <th style={thStyle}>Breakfast</th>
                <th style={thStyle}>Lunch</th>
                <th style={thStyle}>Dinner</th>
                <th style={thStyle}>Note</th>
              </tr>
            </thead>
            <tbody>
              {dietPlan.map((dayPlan, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{daysOfWeek[index] || `Day ${index + 1}`}</td>
                  <td style={tdStyle}>{dayPlan.Calories}</td>
                  <td style={tdStyle}>{dayPlan.Protein}</td>
                  <td style={tdStyle}>{dayPlan.Carbs}</td>
                  <td style={tdStyle}>{dayPlan.Fats}</td>
                  <td style={tdStyle}>{dayPlan.Fiber}</td>
                  <td style={tdStyle}>{dayPlan.Breakfast}</td>
                  <td style={tdStyle}>{dayPlan.Lunch}</td>
                  <td style={tdStyle}>{dayPlan.Dinner}</td>
                  <td style={tdStyle}>{dayPlan.Note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default DietPlan;
