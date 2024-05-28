import { useThemeContext } from "../../ThemeContext";
import PropTypes from "prop-types";
import { useState } from "react"; // Importamos useState para manejar el estado del input
import "../../Styles/Components/TextInput.css";

const TextInput = ({ label, type, placeholder, onChange, required }) => {
  const { contextTheme } = useThemeContext();
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false); // Estado para rastrear si el input ha sido tocado

  const handleChange = (e) => {
    const { value } = e.target;
    console.log("Value: ", value);
    setInputValue(value);
    console.log("Value 1: ", value);
    if (onChange) {
      onChange(value);
      console.log("Value 2: ", value);
    }
  };

  const handleBlur = () => {
    setTouched(true); // Marcar el input como tocado cuando se pierde el foco
  };

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
        value={inputValue}
        onChange={handleChange} // Propagamos el evento onChange al input
        onBlur={handleBlur} // Manejador para rastrear cuando se pierde el foco
      />
      {required && touched && inputValue.trim() === "" && (
        <div
          className={`error-message ${
            contextTheme === "Dark" ? "dark-error" : ""
          }`}
        >
          Este campo es requerido.
        </div>
      )}
    </div>
  );
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string, // Agregamos type a las propTypes
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  type: "text", // Por defecto, el tipo es 'text'
  required: false, // Por defecto, el campo no es requerido
};

export default TextInput;
