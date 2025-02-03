import React, { createContext, useState, useContext } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component that wraps your app and provides user data to all components
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data here

  const login = (userData) => {
    setUser(userData); // Set user data on login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
