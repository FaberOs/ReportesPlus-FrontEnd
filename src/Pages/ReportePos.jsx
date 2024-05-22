import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import TableTabs from "../Components/Layout/TableTabs.jsx";

function ReportePos() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [isDarkTheme]);

  // Parse the query string
  const query = new URLSearchParams(location.search);
  const mes = query.get("mes");
  const anio = query.get("anio");
  const codigo = query.get("codigo");

  // Construct API URL
  const apiUrl = `http://localhost:8080/api/v1/posgrados/reporte/ingresos?mes=${mes}&anio=${anio}&codigo=${codigo}`;

  // Fetch data from API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        // If response is not ok, redirect to /consultar
        window.location.href = "/consultar";
      }
      return response.json();
    })
    .then((data) => {
      // Handle data here if needed
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Handle error if needed
    });

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {/* Pass the parameters as props to Tableinfo */}
        <TableTabs mes={mes} anio={anio} codigo={codigo} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ReportePos;
