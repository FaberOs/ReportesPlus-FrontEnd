import { useThemeContext } from "../../ThemeContext";
import PropTypes from "prop-types";
import "../../Styles/Components/TextInput.css";

const TextInput = ({ label, placeholder, onChange  }) => {
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
        onChange={onChange} // Propagamos el evento onChange al input
      />
    </div>
  );
};
// Define PropTypes para asegurarte de que se pasen las props correctamente
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func, // Indicamos que onChange es opcional
};

export default TextInput;
