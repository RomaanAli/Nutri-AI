import React from 'react';
import backgroundImg from '../assets/background.jpg'; // Adjust path accordingly
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-content">
        <div className="faq-item">
          <h2>1. What is Nutri-AI?</h2>
          <p>
            Nutri-AI is an AI-powered tool that creates <strong>personalized 7-day diet plans</strong> based on your health details like age, weight, and medical conditions such as diabetes, hypertension, and obesity. It helps you make healthier food choices with detailed nutrition info.
          </p>
        </div>
        <div className="faq-item">
          <h2>2. How does Nutri-AI generate my diet plan?</h2>
          <p>
            Nutri-AI uses advanced machine learning models trained on real health and nutrition data. It takes your personal info and health conditions to recommend meals with calories, protein, carbs, fats, and special notes suited to your needs.
          </p>
        </div>
        <div className="faq-item">
          <h2>3. Can Nutri-AI handle multiple health conditions?</h2>
          <p>
            Yes, Nutri-AI creates diet plans that consider multiple conditions like diabetes, hypertension, and obesity together, providing combined dietary advice to support your health effectively.
          </p>
        </div>
        <div className="faq-item">
          <h2>4. Is Nutri-AI a replacement for medical advice?</h2>
          <p>
            No. Nutri-AI is a <strong>supportive tool</strong> designed to assist you in making healthier choices. It does <strong>not replace professional medical advice</strong>. Always consult your doctor for medical concerns.
          </p>
        </div>
        <div className="faq-item">
          <h2>5. What information do I need to provide?</h2>
          <p>
            You will provide basic info like age, gender, BMI, height, activity level, medical conditions, allergies,and dietary restrictions so Nutri-AI can tailor your diet plan accurately.
          </p>
        </div>
        <div className="faq-item">
          <h2>6. Can I customize or change my diet plan?</h2>
          <p>
            Yes. Nutri-AI’s plans are flexible and can be adjusted based on your preferences, lifestyle, and feedback to better fit your needs.
          </p>
        </div>
        <div className="faq-item">
          <h2>7. How accurate are the nutrition details?</h2>
          <p>
            Nutrition info like calories, protein, carbs, and fats are based on trusted datasets and scientific guidelines. However, individual needs may vary, so use this as a helpful guide.
          </p>
        </div>
        <div className="faq-item">
          <h2>8. Is Nutri-AI free to use?</h2>
          <p>
            Currently, Nutri-AI offers free basic diet planning. Future updates may include premium features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
