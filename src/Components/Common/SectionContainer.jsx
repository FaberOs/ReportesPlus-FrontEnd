import "../../Styles/Components/SectionContainer.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../UI/IconButton.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";
import axios from "axios";

const SectionContainer = ({ titulo, mes, anio, codigo, nombrePosgrado }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  const handleDownload = async () => {
    try {
      const url = `http://localhost:8080/api/v1/posgrados/reporte/excel/ingreso-gastos?mes=${mes}&anio=${anio}&codigo=${codigo}`;
      const response = await axios.get(url, {
        responseType: "blob", // Important to receive the file as a blob
      });

      // Create a new Blob object using the response data
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      // Create a link element
      const link = document.createElement("a");
      // Set the href and download attributes for the link
      link.href = window.URL.createObjectURL(blob);
      link.download = `Reporte_${nombrePosgrado}.xlsx`;
      // Append the link to the body
      document.body.appendChild(link);
      // Programmatically click the link to trigger the download
      link.click();
      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div
      className={`section-container ${
        isDarkTheme ? "dark-SectionContainer" : ""
      }`}
    >
      <div>
        <h1>{titulo}</h1>
      </div>
      <div>
        <IconButton
          buttonText="DESCARGAR ARCHIVO"
          icon={<FontAwesomeIcon icon={faDownload} />}
          variant="default"
          onClick={handleDownload} // Pass the handleDownload function
        />
      </div>
    </div>
  );
};

SectionContainer.propTypes = {
  titulo: PropTypes.string.isRequired,
  mes: PropTypes.string.isRequired,
  anio: PropTypes.number.isRequired,
  codigo: PropTypes.string.isRequired,
  nombrePosgrado: PropTypes.string.isRequired,
};

export default SectionContainer;
