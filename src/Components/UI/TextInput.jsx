//import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/TextInput.css";

const TextInput = ({ label, placeholder }) => {
  return (
    <div>
      <h4 className="textInput-label">{label}</h4>
      <input type="text" className="textInput" placeholder={placeholder} />
    </div>
  );
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
