import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("User") !== "0"
  );

  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("User");
    console.log("valor user: ", user);
    console.log("valor auth: ", isAuthenticated);
    setIsAuthenticated(true);
  }, []);

  const login = (usuario) => {
    localStorage.setItem("User", "1");
    setIsAuthenticated(true);
    localStorage.setItem("username", usuario);
    setUsername(usuario);
  };

  const logout = () => {
    localStorage.setItem("User", "0");
    setIsAuthenticated(false);
    localStorage.removeItem("username");
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
