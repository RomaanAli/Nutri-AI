import React, { useState, useRef, useContext } from 'react';
import './LoginSignup.css';
import LoginImage from '../assets/login.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // ⭐ Import UserContext

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const { loginUser } = useContext(UserContext); // ⭐ Use UserContext

  // Handle input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validate all fields on submit
  const validateAll = () => {
    const fieldsToValidate = ['username', 'password'];
    if (!isLogin) fieldsToValidate.splice(1, 0, 'email'); // Insert email for signup

    let newErrors = {};
    let firstErrorField = null;

    for (let field of fieldsToValidate) {
      const value = formData[field].trim();
      let error = '';

      switch (field) {
        case 'username':
          if (!value) error = 'Username is required';
          else if (value.length < 3) error = 'Username must be at least 3 characters';
          else if (/^\d+$/.test(value)) error = 'Username cannot be numbers only';
          break;
        case 'email':
          if (!value) error = 'Email is required';
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) error = 'Invalid email address';
          break;
        case 'password':
          if (!value) error = 'Password is required';
          else if (value.length < 6) error = 'Password must be at least 6 characters';
          break;
        default:
          break;
      }

      if (error) {
        newErrors[field] = error;
        if (!firstErrorField) firstErrorField = field;
      }
    }

    // Set error only for first invalid field, clear others
    const filteredErrors = {};
    if (firstErrorField) filteredErrors[firstErrorField] = newErrors[firstErrorField];
    setErrors(filteredErrors);

    return !firstErrorField; // true if no errors
  };

  // Submit handler with real API calls and redirects!
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setLoading(true);
    try {
      if (isLogin) {
        // LOGIN
        const res = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: formData.username, password: formData.password }),
        });
        const data = await res.json();
        if (res.ok) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          loginUser(data.username, data.token); // ⭐ Update UserContext!
          alert('Logged in successfully!');
          navigate('/'); // Redirect to home page
        } else {
          alert(data.message || 'Login failed');
        }
      } else {
        // SIGNUP
        const res = await fetch('http://localhost:5000/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: formData.username, email: formData.email, password: formData.password }),
        });
        const data = await res.json();
        if (res.ok) {
          alert('Signup successful! Redirecting to login...');
          setIsLogin(true);
          setFormData({ username: '', email: '', password: '' });
        } else {
          alert(data.message || 'Signup failed');
        }
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Handle Enter key to move focus to next input only if current is valid
  const handleKeyDown = (e, fieldName, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Validate current field only
      let error = '';
      const value = formData[fieldName].trim();
      switch (fieldName) {
        case 'username':
          if (!value) error = 'Username is required';
          else if (value.length < 3) error = 'Username must be at least 3 characters';
          else if (/^\d+$/.test(value)) error = 'Username cannot be numbers only';
          break;
        case 'email':
          if (!value) error = 'Email is required';
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) error = 'Invalid email address';
          break;
        case 'password':
          if (!value) error = 'Password is required';
          else if (value.length < 6) error = 'Password must be at least 6 characters';
          break;
        default:
          break;
      }

      if (error) {
        setErrors({ [fieldName]: error });
      } else {
        setErrors({});
        if (nextRef && nextRef.current) {
          nextRef.current.focus();
        }
      }
    }
  };

  // Toggle form type
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setFormData({ username: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-image">
        <img src={LoginImage} alt="Login/Signup Illustration" />
      </div>
      <div className="login-signup-form">
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              onKeyDown={e => handleKeyDown(e, 'username', isLogin ? passwordRef : emailRef)}
              ref={usernameRef}
              aria-describedby="username-error"
              required
            />
            {errors.username && (
              <p className="error-message" id="username-error">
                <b style={{ color: 'red' }}>{errors.username}</b>
              </p>
            )}
          </div>

          {/* Email (only signup) */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={e => handleKeyDown(e, 'email', passwordRef)}
                ref={emailRef}
                aria-describedby="email-error"
                required
              />
              {errors.email && (
                <p className="error-message" id="email-error">
                  <b style={{ color: 'red' }}>{errors.email}</b>
                </p>
              )}
            </div>
          )}

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                ref={passwordRef}
                aria-describedby="password-error"
                required
                className="password-input"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    // Validate password field only
                    let error = '';
                    const value = formData.password.trim();
                    if (!value) error = 'Password is required';
                    else if (value.length < 6) error = 'Password must be at least 6 characters';
                    if (error) {
                      setErrors({ password: error });
                    } else {
                      setErrors({});
                      handleSubmit(e);
                    }
                  }
                }}
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="error-message" id="password-error">
                <b style={{ color: 'red' }}>{errors.password}</b>
              </p>
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Please wait...' : isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button type="button" onClick={toggleForm} className="toggle-form-btn">
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
