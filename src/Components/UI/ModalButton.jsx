import { useState } from "react";
import PropTypes from "prop-types";
import "../../Styles/Components/ModalButton.css";

import ModalGeneric from "../Common/Modal.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";

const ModalButton = ({
  buttonText,
  tituloModal,
  contenidoModal,
  rutaModal,
  variant,
  disabled,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <>
      <button
        className={`modal-button ${variant} ${
          isDarkTheme ? `dark-${variant}` : ""
        }`}
        type="button"
        onClick={handleShow}
        disabled={disabled}
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

ModalButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  tituloModal: PropTypes.string.isRequired,
  contenidoModal: PropTypes.string.isRequired,
  rutaModal: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "outline"]),
  disabled: PropTypes.bool,
};

ModalButton.defaultProps = {
  variant: "default",
};

export default ModalButton;
