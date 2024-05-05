import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import Tableinfo from "../Components/Layout/Tableinfo.jsx";

function TablaConsulta() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [location, isDarkTheme]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Tableinfo />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default TablaConsulta;
