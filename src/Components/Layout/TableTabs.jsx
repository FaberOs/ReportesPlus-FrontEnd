import "../../Styles/Layout/StyleTabla.css";
import SectionContainer from "../Common/SectionContainer.jsx";
import ControlledTabs from "./ControlledTabs.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";

const TableTabs = ({ mes, anio, codigo }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

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
          <ControlledTabs mes={mes} anio={anio} codigo={codigo} />
        </div>
      </div>
    </div>
  );
};

export default TableTabs;
