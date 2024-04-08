import React from "react";
import "../../Styles/Layout/ConsultForm.css"; // Importa el archivo CSS para los estilos personalizados

import ModalButton from "../UI/ModalButton.jsx";

import ImagenU from "../../Assets/ImagenU.png";

import TextInput from "../UI/TextInput.jsx";
import MonthPicker from "../UI/MonthPicker.jsx";

const ConsultForm = () => {
  return (
    <div className="centered-container">
      <div className="consultForm-container">
        {/* Parte izquierda */}
        <div className="consultForm-left-section">
          <img
            src={ImagenU} // Ruta de la imagen
            alt="Imagen"
            className="consultForm-imagen"
          />
        </div>
        {/* Parte derecha */}
        <div className="consultForm-right-section">
          <h2 className="consultForm-titulo">Reportes Posgrado</h2>
          <div className="datepicker-container">
            <MonthPicker
              label="Vigencia"
              placeholder="Seleccione la Vigencia"
            />
          </div>
          <div>
            <TextInput label="Código" placeholder="Digite el Código" />
          </div>
          <ModalButton buttonText="CONSULTAR" />
        </div>
      </div>
    </div>
  );
};

export default ConsultForm;
