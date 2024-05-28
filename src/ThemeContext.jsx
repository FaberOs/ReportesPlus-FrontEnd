import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Obtener el tema del localStorage o establecerlo en "Light" si no está presente
  const [contextTheme, setContextTheme] = useState(
    localStorage.getItem("theme") || "Light"
  );

  // Función para actualizar el tema y guardarlo en localStorage
  const updateTheme = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    setContextTheme(newTheme);
  };

  useEffect(() => {
    // Actualizar el tema en localStorage cuando cambie
    localStorage.setItem("theme", contextTheme);
  }, [contextTheme]);

  const values = { contextTheme, setContextTheme: updateTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
