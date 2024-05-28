import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import TableTabs from "../Components/Layout/TableTabs.jsx";
import ModalError from "../Components/Common/ModalError.jsx";

function ReportePos() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [showModal, setShowModal] = useState(false);

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
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          setShowModal(true);
          return;
        }
        return response.json();
      })
      .then((data) => {
        // Handle data here if needed
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setShowModal(true);
      });
  }, [apiUrl]);

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.href = "/consultar";
  };

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
      <ModalError show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default ReportePos;
