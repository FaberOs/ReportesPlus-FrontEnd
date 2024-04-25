//import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../../Styles/Components/SimpleButton.css";
import "../../Styles/Components/Modal.css";

import SimpleButton from "../UI/SimpleButton.jsx";
import IconInfo from "../../Assets/IconInfo.svg";

const ModalGeneric = ({
  show,
  handleClose,
  titulo,
  contenido,
  rutaConfirmacion,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="confirmModal"
    >
      <Modal.Body>
        <div>
          <div className="modalIcon">
            <img className="advertenciaico" src={IconInfo} alt="advertencia" />
          </div>
          <div className="modalHeader">{titulo}</div>
          <div className="modalBody">{contenido}</div>
          <div className="modalFooter">
            <SimpleButton buttonText="No" onClick={handleClose} />
            <Link to={rutaConfirmacion} style={{ textDecoration: "none" }}>
              <SimpleButton buttonText="Sí" />
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ModalGeneric.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  rutaConfirmacion: PropTypes.string.isRequired,
  show: PropTypes.func,
  handleClose: PropTypes.func,
};

export default ModalGeneric;
