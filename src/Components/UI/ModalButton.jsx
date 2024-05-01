import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/SimpleButton.css";

import ToastNotify from "../Common/ToastNotify.jsx";
import ModalGeneric from "../Common/Modal.jsx";

const ModalButton = ({
  buttonText,
  tituloModal,
  contenidoModal,
  rutaModal,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn-button" type="submit" onClick={handleShow}>
        {buttonText}        
      </button>
      <ToastNotify accionar={true} tipo='E'/> 
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
