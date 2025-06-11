import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to <b>Nutri-AI</b> By using our website, you agree to follow these terms and conditions. Please read them carefully before using our services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Nutri-AI, you must agree with these terms. If you do not agree, please do not use our website.
      </p>

      <h2>2. Purpose of the Service</h2>
      <p>
        Nutri-AI provides AI-powered personalized diet plans based on your health details. It is <b>not a substitute for professional medical advice</b>. Always consult a qualified healthcare provider for diagnosis and treatment.
      </p>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>Use Nutri-AI for lawful and personal purposes only.</li>
        <li>Provide accurate and truthful health information for best results.</li>
        <li>Avoid sharing false or harmful content on the platform.</li>
      </ul>

      <h2>4. Limitations of Use</h2>
      <p>
        Nutri-AI is intended for personal use and guidance only. You may not resell, redistribute, or misuse the diet plans or data provided.
      </p>

      <h2>5. Data Handling</h2>
      <ul>
        <li>Your data is stored securely and used only to provide and improve our services.</li>
        <li>Personal information will not be sold or shared with third parties for marketing.</li>
      </ul>

      <h2>6. Disclaimers</h2>
      <p>
        While Nutri-AI uses advanced AI models, results may vary and are not guaranteed. We are not responsible for any health decisions made based on our recommendations.
      </p>

      <h2>7. Termination of Access</h2>
      <p>
        We reserve the right to restrict or terminate access to Nutri-AI if these terms are violated.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        These terms may be updated occasionally. Users should review this page periodically for changes.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For questions or concerns about these terms, please contact us at:
      </p>
      <ul>
        <li>
          <b>Email:</b> <a href="mailto:email@example.com"> contact@nutriAI.com</a>
        </li>
      </ul>

      <p>
        By continuing to use <b>Nutri-AI</b>, you agree to these terms and conditions. Thank you for trusting us to support your health journey.
      </p>
    </div>
  );
};

export default TermsAndConditions;
