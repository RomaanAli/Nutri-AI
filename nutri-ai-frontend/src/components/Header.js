import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Header.css';

const Header = () => {
  const [showFaqDropdown, setShowFaqDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/auth/delete', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert('Account deleted successfully.');
        logoutUser();
        navigate('/login');
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to delete account.');
      }
    } catch (error) {
      alert('Error deleting account: ' + error.message);
    }
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        Nutri-AI
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bmi-calculator">BMI Calculator</Link>
        </li>
        <li>
          <Link to="/diet-plan">Diet Plan</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li
          className="faq"
          onMouseEnter={() => setShowFaqDropdown(true)}
          onMouseLeave={() => setShowFaqDropdown(false)}
          onFocus={() => setShowFaqDropdown(true)}
          onBlur={() => setShowFaqDropdown(false)}
          tabIndex={0}
        >
          <Link to="/faq" className="faq-link" aria-haspopup="true" aria-expanded={showFaqDropdown}>
            FAQs
          </Link>
          {showFaqDropdown && (
            <ul className="dropdown" role="menu" aria-label="FAQ submenu">
              <li role="none">
                <Link to="/privacy-policy" role="menuitem" tabIndex={-1}>
                  Privacy Policy
                </Link>
              </li>
              <li role="none">
                <Link to="/terms-and-conditions" role="menuitem" tabIndex={-1}>
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          )}
        </li>

        {user ? (
          <li
            className="user-dropdown"
            onMouseEnter={() => setShowUserDropdown(true)}
            onMouseLeave={() => setShowUserDropdown(false)}
            onFocus={() => setShowUserDropdown(true)}
            onBlur={() => setShowUserDropdown(false)}
            tabIndex={0}
          >
            <span className="user-welcome">
              Welcome {user.username}
            </span>
            {showUserDropdown && (
              <ul className="dropdown" role="menu" aria-label="User submenu">
                <li role="none">
                  <button onClick={handleLogout} role="menuitem" tabIndex={-1} className="dropdown-btn">
                    Logout
                  </button>
                </li>
                <li role="none">
                  <button onClick={handleDeleteAccount} role="menuitem" tabIndex={-1} className="dropdown-btn delete-btn">
                    Delete Account
                  </button>
                </li>
              </ul>
            )}
          </li>
        ) : (
          <li>
            <Link to="/login">Login/Signup</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
