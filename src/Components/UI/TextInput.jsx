import { useThemeContext } from "../../ThemeContext";
import PropTypes from "prop-types";
import "../../Styles/Components/TextInput.css";

const TextInput = ({ label, placeholder }) => {
  const { contextTheme } = useThemeContext();

  return (
    <div>
      <h4
        className={`textInput-label ${
          contextTheme === "Dark" ? "dark-text" : ""
        }`}
      >
        {label}
      </h4>
      <input
        type="text"
        className={`textInput ${contextTheme === "Dark" ? "dark-input" : ""}`}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
