import PropTypes from "prop-types";
import "../../Styles/Components/SimpleButton.css";
import { useThemeContext } from "../../ThemeContext.jsx";
import { useThemeContext } from "../../ThemeContext.jsx";

const SimpleButton = ({ buttonText, onClick, variant }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <button
      className={`simple-button ${variant} ${
        isDarkTheme ? `dark-${variant}` : ""
      }`}
      type="submit"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

SimpleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "outline"]),
};

SimpleButton.defaultProps = {
  variant: "default",
};

export default SimpleButton;
