import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/IconButton.css";

const IconButton = ({ buttonText, iconSrc }) => {
  return (
    <button className="btn">
      {buttonText}
      <img src={iconSrc} alt="Icono" className="icon" />
    </button>
  );
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
IconButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
};

export default IconButton;
