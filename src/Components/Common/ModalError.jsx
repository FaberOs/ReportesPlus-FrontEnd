// ModalError.jsx
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import "../../Styles/Components/Modal.css";

import SimpleButton from "../UI/SimpleButton.jsx";
import IconInfo from "../../Assets/IconInfo.svg";
import { useThemeContext } from "../../ThemeContext.jsx";

const ModalError = ({ show, handleClose }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`confirmModal ${isDarkTheme ? "dark-theme" : ""}`}
    >
      <Modal.Body>
        <div>
          <div className="modalIcon">
            <img className="advertenciaico" src={IconInfo} alt="advertencia" />
          </div>
          <div className={`modalHeader ${isDarkTheme ? "dark-text" : ""}`}>
            Código Incorrecto
          </div>
          <div className={`modalBody ${isDarkTheme ? "dark-text" : ""}`}>
            El código proporcionado es incorrecto. Por favor, verifique y vuelva a intentarlo.
          </div>
          <div className="modalFooter">
            <SimpleButton
              buttonText="Cerrar"
              onClick={handleClose}
              variant="default"
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ModalError.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalError;
