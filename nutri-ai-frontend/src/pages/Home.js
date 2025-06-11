import React from 'react';
import './Home.css';
import humanXray from '../assets/human-xray.png'; // Corrected variable name (no hyphen)

const Home = () => {
  return (
    <div className="home-container">
      <div className="green-section">
        <div className="text-content">
          <h1>Nutri-AI: Smart Diet Plans with AI</h1>
          <h2>Personalized Nutrition & BMI Analysis</h2>
          <h4>
            This platform helps you calculate your BMI and get a weekly diet plan based on your health profile.
          </h4>
          <button
            className="read-more-button"
            onClick={() => window.location.href = '/about'}
          >
            Read More
          </button>
        </div>
        <div className="image-content">
          <img src={humanXray} alt="Healthy Nutrition" />
        </div>
      </div>
    </div>
  );
};

export default Home;
