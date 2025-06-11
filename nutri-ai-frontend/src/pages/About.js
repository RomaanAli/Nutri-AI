import React from 'react';
import './About.css'; // Import the CSS file for styling
import AboutUsImage from '../assets/aboutUsImage.png'; //image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <img src={AboutUsImage} alt="Nutrition and AI" />
        </div>

        {/* Text Content */}
        <div className="about-text">
          <h1>About Nutri-AI</h1>
          <p>
            <b>Nutri-AI</b> is an <b>AI-powered tool</b> designed to provide <b>personalized 7-day diet plans</b> based on your health details like age, weight, and medical conditions such as <b>diabetes, hypertension, and obesity</b>.  
            Our model recommends meals with detailed nutrition info calories, protein, carbs, and fats tailored to your needs.
            Please note, Nutri-AI is a <b>supportive assistant</b> to help you make healthier choices <b>it does not replace professional medical advice</b>.
            We aim to guide you with <b>safe science-backed nutrition plans</b> that fit your lifestyle and health goals.
            <br /><br />
            <b>Thank you for trusting Nutri-AI on your journey to better health.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
