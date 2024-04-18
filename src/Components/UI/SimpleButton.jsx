import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/SimpleButton.css";

const SimpleButton = ({ buttonText, onClick }) => {
  return (
    <>
      <button className="btn-button" onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
SimpleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SimpleButton;
