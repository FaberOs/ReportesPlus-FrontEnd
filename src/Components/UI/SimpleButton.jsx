//simport React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/SimpleButton.css";

const SimpleButton = ({ buttonText }) => {
  return <button className="btn btn-button">{buttonText}</button>;
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
SimpleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SimpleButton;
