// ModalGeneric.jsx

import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../Styles/Components/Modal.css";

import SimpleButton from "../UI/SimpleButton.jsx";
import IconInfo from "../../Assets/IconInfo.svg";
import { useThemeContext } from "../../ThemeContext.jsx";

const ModalGeneric = ({
  show,
  handleClose,
  titulo,
  contenido,
  rutaConfirmacion,
}) => {
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
            {titulo}
          </div>
          <div className={`modalBody ${isDarkTheme ? "dark-text" : ""}`}>
            {contenido}
          </div>
          <div className="modalFooter">
            <SimpleButton
              buttonText="No"
              onClick={handleClose}
              darkTheme={isDarkTheme}
            />
            <Link to={rutaConfirmacion} style={{ textDecoration: "none" }}>
              <SimpleButton buttonText="Sí" darkTheme={isDarkTheme} />
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
