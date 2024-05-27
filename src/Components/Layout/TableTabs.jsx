import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Styles/Layout/StyleTabla.css";
import SectionContainer from "../Common/SectionContainer.jsx";
import ControlledTabs from "./ControlledTabs.jsx";
import SimpleButton from "../UI/SimpleButton.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";
import { cleanText } from "../Features/Utils.jsx";

const TableTabs = ({ mes, anio, codigo }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [nombrePosgrado, setNombrePosgrado] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/posgrados/reporte/ingresos`,
          {
            params: {
              mes: mes,
              anio: anio,
              codigo: codigo,
            },
          }
        );
        const data = response.data;
        const cleanedNombrePosgrado = cleanText(data.nombrePosgrado); // Limpia el nombre del posgrado
        setNombrePosgrado(cleanedNombrePosgrado);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [mes, anio, codigo]);

  return (
    <div
      className={`d-flex justify-content-center ${
        isDarkTheme ? "dark-theme" : ""
      }`}
    >
      <div className="col-11">
        <div>
          <SectionContainer
            titulo={`REPORTE GENERAL DE ${nombrePosgrado}`}
            mes={mes}
            anio={anio}
            codigo={codigo}
            nombrePosgrado={nombrePosgrado} // Pass the nombrePosgrado parameter
          />
        </div>
        <div className="contenedor instrucciones">
          <p className="instrucciones-texto">
            Haga clic en una fila para ver más información
            <span className="asterisco">*</span>
          </p>
          <Link to="/consultar" style={{ textDecoration: "none" }}>
            <SimpleButton buttonText="REGRESAR" variant="outline" />
          </Link>
        </div>
        <div className="contenedor">
          <ControlledTabs mes={mes} anio={anio} codigo={codigo} />
        </div>
      </div>
    </div>
  );
};

export default TableTabs;
