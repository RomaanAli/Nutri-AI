import React, { useState, useRef } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const [heightError, setHeightError] = useState('');
  const [weightError, setWeightError] = useState('');

  const weightInputRef = useRef(null);

  const handleHeightChange = (e) => {
    const val = e.target.value;
    setHeight(val);

    if (!val) {
      setHeightError('Height is required.');
    } else if (val <= 0 || val > 300) {
      setHeightError('Height must be between 1 and 300 cm.');
    } else {
      setHeightError('');
    }
  };

  const handleWeightChange = (e) => {
    const val = e.target.value;
    setWeight(val);

    if (!val) {
      setWeightError('Weight is required.');
    } else if (val <= 0 || val > 500) {
      setWeightError('Weight must be between 1 and 500 kg.');
    } else {
      setWeightError('');
    }
  };

  const handleHeightKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (weightInputRef.current) {
        weightInputRef.current.focus();
      }
    }
  };

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || heightError || weightError) {
      setBMI(null);
      setCategory('');
      setMessage('');
      return;
    }

    const heightMeters = height / 100;
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
      setMessage('You are underweight. Try to eat nutritious food.');
    } else if (bmiValue < 24.9) {
      setCategory('Normal weight');
      setMessage('Great! Your weight is normal.');
    } else if (bmiValue < 29.9) {
      setCategory('Overweight');
      setMessage('You are overweight. Consider exercise and healthy diet.');
    } else {
      setCategory('Obese');
      setMessage('You are obese. Please consult a doctor.');
    }
  };

  return (
    <div className="bmi-container">
      <h2 className="bmi-title">BMI Calculator</h2>
      <form className="bmi-form" onSubmit={calculateBMI} noValidate>
        <div className="input-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={handleHeightChange}
            onKeyDown={handleHeightKeyDown}
            placeholder="e.g. 170"
            min="1"
            max="300"
            className={heightError ? 'input-error' : ''}
            required
          />
          {heightError && <p className="error-text">{heightError}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={handleWeightChange}
            ref={weightInputRef}
            placeholder="e.g. 65"
            min="1"
            max="500"
            className={weightError ? 'input-error' : ''}
            required
          />
          {weightError && <p className="error-text">{weightError}</p>}
        </div>

        <button
          type="submit"
          disabled={heightError || weightError || !height || !weight}
          className="calculate-btn"
        >
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div className="result-box">
          <h3>Your BMI: <span className="bmi-value">{bmi}</span></h3>
          <p className="bmi-category">{category}</p>
          <p className="bmi-message">{message}</p>

          <table className="bmi-table">
            <thead>
              <tr>
                <th>BMI Range</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Below 18.5</td><td>Underweight</td></tr>
              <tr><td>18.5 – 24.9</td><td>Normal weight</td></tr>
              <tr><td>25 – 29.9</td><td>Overweight</td></tr>
              <tr><td>30 and above</td><td>Obese</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
