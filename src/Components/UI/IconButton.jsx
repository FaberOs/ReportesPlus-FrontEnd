import PropTypes from "prop-types";
import "../../Styles/Components/IconButton.css";
import { useThemeContext } from "../../ThemeContext.jsx";

const IconButton = ({ buttonText, icon, variant }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <button
      className={`icon-button ${variant} ${
        isDarkTheme ? `dark-${variant}` : ""
      }`}
    >
      {buttonText}
      <span className={`icon ${isDarkTheme ? "dark-icon" : ""}`}>{icon}</span>
    </button>
  );
};

IconButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  variant: PropTypes.oneOf(["default", "outline"]),
};

IconButton.defaultProps = {
  variant: "default",
};

export default IconButton;
