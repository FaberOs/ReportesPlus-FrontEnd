//import React from "react";
import PropTypes from "prop-types";
import "../../Styles/Layout/ConsultForm.css";

const ConsultForm = ({ imagen, titulo, input1, input2, boton }) => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className="consultForm-container p-3">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={imagen}
                  alt="Imagen"
                  className="consultForm-imagen img-fluid"
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="text-center mt-4">
                  <h2 className="consultForm-titulo">{titulo}</h2>
                </div>
                <div className="mb-1">{input1}</div>
                <div className="mb-1">{input2}</div>
                <div className="text-center mb-4">{boton}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConsultForm.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  input1: PropTypes.elementType.isRequired,
  input2: PropTypes.elementType.isRequired,
  boton: PropTypes.elementType.isRequired,
};

export default ConsultForm;
