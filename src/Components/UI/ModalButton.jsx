import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/SimpleButton.css";

import ModalGeneric from "../Common/Modal.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";

const ModalButton = ({
  buttonText,
  tituloModal,
  contenidoModal,
  rutaModal,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <>
      <button
        className={`btn-button ${isDarkTheme ? "dark-SimpleButton" : ""}`}
        type="submit"
        onClick={handleShow}
      >
        {buttonText}
      </button>
      <ModalGeneric
        show={show}
        handleClose={handleClose}
        titulo={tituloModal}
        contenido={contenidoModal}
        rutaConfirmacion={rutaModal}
      />
    </>
  );
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
ModalButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  tituloModal: PropTypes.string.isRequired,
  contenidoModal: PropTypes.string.isRequired,
  rutaModal: PropTypes.string.isRequired,
};

export default ModalButton;
