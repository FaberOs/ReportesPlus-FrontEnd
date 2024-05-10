import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/Layout/StyleTabla.css";
import SectionContainer from "../Common/SectionContainer.jsx";
import ResponsiveTable from "./ResponsiveTable.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";

const MacroTable = ({ mes, anio }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8080/api/v1/posgrados/reportemacro?mes=${mes}&anio=${anio}`;
        const response = await axios.get(url);
        if (response.data && response.data.consolidados) {
          setData(response.data.consolidados);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching macro report:", error);
        setData([]);
      }
    };

    fetchData();
  }, [mes, anio]);

  console.log("data: ", data);

  const displayDataMacro = data.map((dato, index) => (
    <tr key={dato.id || index}>
      <td>{dato.codigoPosgrado}</td>
      <td>{dato.nombrePosgrado}</td>
      <td>{dato.total_ingresos}</td>
      <td>{dato.total_descuentos}</td>
      <td>{dato.total_neto}</td>
      <td>{dato.contribucion}</td>
      <td>{dato.total_disponible}</td>
      <td>{dato.gastos_certificados}</td>
      <td>{dato.saldo}</td>
    </tr>
  ));

  const columns = [
    "Código Posgrado",
    "Nombre Posgrado",
    "Total Ingresos",
    "Total Descuentos",
    "Total Neto",
    "Contribución",
    "Total Disponible",
    "Gastos Certificados",
    "Saldo",
  ];

  return (
    <div
      className={`d-flex justify-content-center ${
        isDarkTheme ? "dark-theme" : ""
      }`}
    >
      <div className="col-11">
        <SectionContainer titulo="REPORTE MACRO" />
        <div className="contenedor">
          <ResponsiveTable data={displayDataMacro} lista={columns} />
        </div>
      </div>
    </div>
  );
};

export default MacroTable;
