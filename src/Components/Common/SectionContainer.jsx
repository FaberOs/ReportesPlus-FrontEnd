// SectionContainer.jsx

import "../../Styles/Components/SectionContainer.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../UI/IconButton.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";

const SectionContainer = ({ titulo }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

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
        />
      </div>
    </div>
  );
};

SectionContainer.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default SectionContainer;
