import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState( localStorage.getItem('User') !== '0');
  useEffect(() => {
    const user = localStorage.getItem('User');
    console.log("valor user: ", user);
    console.log("valor auth: ", isAuthenticated);
    setIsAuthenticated(true);
  }, []);
  
  const login = () => {
    localStorage.setItem("User", 1);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.setItem("User", 2);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);