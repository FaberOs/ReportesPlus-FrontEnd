import React from "react";
import "../../Styles/Layout/ConsultForm.css"; // Importa el archivo CSS para los estilos personalizados
import PropTypes from "prop-types"; // Importa PropTypes para validar las props

import ModalButton from "../UI/ModalButton.jsx";

const ConsultForm = ({ imagen, titulo, TextInput1, TextInput2 }) => {
  return (
    <div className="centered-container">
      <div className="consultForm-container">
        {/* Parte izquierda */}
        <div className="consultForm-left-section">
          <img
            src={imagen} // Ruta de la imagen
            alt="Imagen"
            className="consultForm-imagen"
          />
        </div>
        {/* Parte derecha */}
        <div className="consultForm-right-section">
          <h2 className="consultForm-titulo">{titulo}</h2>
          <div className="datepicker-container">{TextInput1}</div>
          <div>{TextInput2}</div>
          <ModalButton buttonText="CONSULTAR" />
        </div>
      </div>
    </div>
  );
};

ConsultForm.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  TextInput1: PropTypes.elementType.isRequired,
  TextInput2: PropTypes.elementType.isRequired,
};

export default ConsultForm;
