import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <p>
          <span className="footer-icon">📍</span> Address: Defense Road, DHA Phase 2, Lahore, Punjab, Pakistan
        </p>
        <p>
          <span className="footer-icon">📞</span> HelpLine: +923069804735
        </p>
        <p>
          <span className="footer-icon">✉️</span> Email: contact@nutriAI.com
        </p>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <p>© 2025 Nutri-AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
