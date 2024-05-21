import { useThemeContext } from "../../ThemeContext";
import PropTypes from "prop-types";
import "../../Styles/Components/TextInput.css";

const TextInput = ({ label, type, placeholder, onChange }) => {
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
        type={type} // Utilizamos el prop type aquí
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
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string // Agregamos type a las propTypes
};

TextInput.defaultProps = {
  type: 'text' // Por defecto, el tipo es 'text'
};

export default TextInput;
