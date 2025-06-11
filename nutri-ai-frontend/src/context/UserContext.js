import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On mount, check if token and username exist in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setUser({ username, token });
    }
  }, []);

  // Login function to set user data
  const loginUser = (username, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setUser({ username, token });
  };

  // Logout function to clear user data
  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
