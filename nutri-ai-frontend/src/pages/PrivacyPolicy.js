import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At <b>Nutri-AI</b>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect only the information necessary to provide and improve our service, including:</p>
      <ul>
        <li>Your name, email, and contact details (if you create an account).</li>
        <li>Health details you provide, such as age, weight, medical conditions, and dietary preferences.</li>
        <li>Usage data like device type and interaction with the site.</li>
      </ul>
      <p>This information helps us deliver personalized diet plans and improve our AI model.</p>

      <h2>2. How We Use Your Data</h2>
      <p>Your data is used to:</p>
      <ul>
        <li>Create customized diet plans based on your health needs.</li>
        <li>Enhance the accuracy and performance of our AI system.</li>
        <li>Communicate important updates and support information.</li>
      </ul>
      <p><b>We never sell or share your personal data for marketing purposes.</b></p>

      <h2>3. How We Protect Your Data</h2>
      <p>We take your data security seriously:</p>
      <ul>
        <li>Data is stored securely with encryption.</li>
        <li>Access is limited to authorized person only.</li>
        <li>We regularly review our security practices to protect your information.</li>
      </ul>
      <p>While we strive to protect your data, no online system is completely secure.</p>

      <h2>4. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to your personal data.</li>
        <li>Ask for corrections or deletion of your data.</li>
      </ul>
      <p>For any requests, please contact us at <a href="mailto:email@example.com">contact@nutriAI.com</a>.</p>

      <h2>5. Cookies</h2>
      <p>
        We use cookies to enhance your experience by remembering preferences and improving site performance.  
        You can disable cookies through your browser settings if you prefer.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted here with the date of the update.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have questions or concerns about your privacy, please email us at <a href="mailto:email@example.com">contact@nutriAI.com</a>.
      </p>

      <p><b>Thank you for trusting Nutri-AI. We are dedicated to keeping your data safe.</b></p>
    </div>
  );
};

export default PrivacyPolicy;
