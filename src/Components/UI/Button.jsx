import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/Button.css";

const Button = ({ buttonText }) => {
  return <button className="btn">{buttonText}</button>;
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
