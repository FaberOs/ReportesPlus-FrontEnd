import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import MacroTable from "../Components/Layout/MacroTable.jsx";

function ReporteMacro() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [location, isDarkTheme]);

  // Parse the query string
 const query = new URLSearchParams(location.search);
  const mes = query.get("mes");
  const anio = query.get("anio");
  const codigo = query.get("codigo"); 

  console.log("mes ", mes, "año ", anio, "codigo ", codigo);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <MacroTable  mes={mes} anio={anio} codigo={codigo}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ReporteMacro;
