// SimpleButton.jsx

import PropTypes from "prop-types";
import "../../Styles/Components/SimpleButton.css";
import { useThemeContext } from "../../ThemeContext.jsx";

const SimpleButton = ({ buttonText, onClick }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <>
      <button
        className={`btn-button ${isDarkTheme ? "dark-SimpleButton" : ""}`}
        type="submit"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
};

SimpleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SimpleButton;
