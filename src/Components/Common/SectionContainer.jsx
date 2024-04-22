import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Components/SectionContainer.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../UI/IconButton.jsx";

const SectionContainer = ({ titulo }) => {
  return (
    <div className="section-container">
      <div>
        <h1>{titulo}</h1>
      </div>
      <div>
        <IconButton
          buttonText="DESCARGAR ARCHIVO"
          icon={<FontAwesomeIcon icon={faDownload} />}
        />
      </div>
    </div>
  );
};

SectionContainer.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default SectionContainer;
