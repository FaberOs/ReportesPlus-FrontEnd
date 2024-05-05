import "../../Styles/Layout/StyleTabla.css";
import SectionContainer from "../Common/SectionContainer.jsx";
import ResponsiveTable from "./ResponsiveTable.jsx";
import ControlledTabs from "./ControlledTabs.jsx";
import JsonData from "../Features/data.json";
import { useThemeContext } from "../../ThemeContext";

const Tableinfo = () => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  const lista3 = ["id", "name", "city", "dirrecion"];

  const DisplayData = JsonData.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
        <td>{info.dirreccion}</td>
      </tr>
    );
  });

  return (
    <div
      className={`d-flex justify-content-center ${
        isDarkTheme ? "dark-theme" : ""
      }`}
    >
      <div className="col-11">
        <div>
          <SectionContainer titulo="REPORTE GENERAL DE POSGRADOS" />
        </div>
        <div className="contenedor">
          <ControlledTabs />
        </div>
        <div className="contenedor-Small">
          <div>
            <h1>RELACIÓN DE RECAUDOS NETOS MENOS CERTIFICADOS</h1>
          </div>
          <div>
            <ResponsiveTable data={DisplayData} lista={lista3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tableinfo;
