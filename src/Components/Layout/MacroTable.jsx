import { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/Layout/StyleTabla.css";
import SectionContainer from "../Common/SectionContainer.jsx";
import ResponsiveTable from "./ResponsiveTable.jsx";
import LoaderSpineer from "../Common/LoaderSpinner.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";

const MacroTable = ({ mes, anio, codigo }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // controlar LoadSpinner

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8080/api/v1/posgrados/reportemacro?mes=${mes}&anio=${anio}&codigo=${codigo}`;
        const response = await axios.get(url);
        if (response.data && response.data.consolidados) {
          setData(response.data.consolidados);
          setIsLoading(false); // Oculta LoadSpinner info. lista
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
        <div className="contenedor d-flex justify-content-center">
          {isLoading ? (
            <div
              className=""
              style={{
                paddingBottom: "90px",
                paddingTop: "90px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <LoaderSpineer />
              <div className="texto-loader-spinner">
                <h4> Consultando reporte, por favor espere... </h4>
              </div>
            </div>
          ) : (
            <ResponsiveTable data={displayDataMacro} lista={columns} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MacroTable;
