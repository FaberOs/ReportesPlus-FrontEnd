// IconButton.js

//import React from "react";
import PropTypes from "prop-types";
import "../../Styles/Components/IconButton.css";
import { useThemeContext } from "../../ThemeContext.jsx";

const IconButton = ({ buttonText, icon }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  return (
    <button
      className={`btn-IconButton ${isDarkTheme ? "dark-IconButton" : ""}`}
    >
      {buttonText}
      <span className={`icon ${isDarkTheme ? "dark-Icon" : ""}`}>{icon}</span>
    </button>
  );
};

IconButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired, // Asegúrate de que se pase un elemento React
};

export default IconButton;
