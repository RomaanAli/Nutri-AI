// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

// This component protects routes: only logged-in users can access
const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    // Not logged in: redirect to login/signup
    return <Navigate to="/login" replace />;
  }

  // Logged in: render the protected page
  return children;
};

export default PrivateRoute;
