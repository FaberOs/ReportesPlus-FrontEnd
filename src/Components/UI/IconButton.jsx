// IconButton.js

//import React from "react";
import PropTypes from "prop-types";
import "../../Styles/Components/IconButton.css";

const IconButton = ({ buttonText, icon }) => {
  return (
    <button className="btn btn-IconButton">
      {buttonText}
      <span className="icon">{icon}</span>
    </button>
  );
};

IconButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired, // Asegúrate de que se pase un elemento React
};

export default IconButton;
