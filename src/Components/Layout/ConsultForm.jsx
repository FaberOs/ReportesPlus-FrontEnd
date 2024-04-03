import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Layout/ConsultForm.css"; // Importa el archivo CSS para los estilos personalizados

import SimpleButton from "../UI/SimpleButton.jsx";

import ImagenU from "../../Assets/ImagenU.png";

const ConsultForm = () => {
  return (
    <div className="centered-container">
      <div className="consult-form-container">
        {/* Parte izquierda */}
        <div className="left-section">
          <img
            src={ImagenU} // Ruta de la imagen
            alt="Imagen"
            className="imagen"
          />
        </div>
        {/* Parte derecha */}
        <div className="right-section">
          <h2 className="Titulo">Reportes Posgrado</h2>
          <div className="datepicker-container">
            <input
              type="month"
              id="start"
              name="start"
              min="2000-01"
              max="2050-12"
              className="datepicker"
              placeholder="Selecciona la vigencia"
            />
          </div>
          <div className="codigo-input">
            <input
              type="text"
              id="codigo"
              className="input"
              placeholder="Ingrese el codigo"
            />
          </div>
          <Link to="/consultar/consulta">
            <SimpleButton buttonText="CONSULTAR" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultForm;
