import "../../Styles/Layout/StyleTabla.css";
import SectionContainer from "../Common/SectionContainer.jsx";
/* import ResponsiveTable from "./ResponsiveTable.jsx"; */
import { useThemeContext } from "../../ThemeContext.jsx";

const MacroTable = (/* { mes, anio, codigo } */) => {
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
          <SectionContainer titulo="REPORTE MACRO" />
        </div>
        <div className="contenedor">
          {/* <ResponsiveTable data={} lista={} /> */}
        </div>
      </div>
    </div>
  );
};

export default MacroTable;
