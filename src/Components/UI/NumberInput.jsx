import { useThemeContext } from "../../ThemeContext";
import PropTypes from "prop-types";
import { useState } from "react";
import "../../Styles/Components/TextInput.css";

const NumberInput = ({
  label,
  type,
  placeholder,
  onChange,
  onlyNumbers,
  required,
}) => {
  const { contextTheme } = useThemeContext();
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false); // Estado para rastrear si el input ha sido tocado

  const handleChange = (e) => {
    const { value } = e.target;
    setTouched(true); // Marcar el input como tocado cuando cambia su valor
    if (onlyNumbers) {
      // Filtra la entrada para que solo permita números
      const numericValue = value.replace(/[^0-9]/g, "");
      setInputValue(numericValue);
      onChange(numericValue);
    } else {
      setInputValue(value);
      onChange(value);
    }
  };

  const handleKeyPress = (e) => {
    if (onlyNumbers && !/[0-9]/.test(e.key)) {
      e.preventDefault();
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
        onChange={handleChange} // Usamos handleChange para filtrar entrada
        onKeyPress={handleKeyPress} // Interceptamos el evento onKeyPress
        onBlur={handleBlur} // Manejador para rastrear cuando se pierde el foco
        inputMode={onlyNumbers ? "numeric" : "text"} // Muestra el teclado numérico en móviles si es necesario
        pattern={onlyNumbers ? "[0-9]*" : undefined} // Permite solo números si es necesario
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

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  onlyNumbers: PropTypes.bool,
  required: PropTypes.bool,
};

NumberInput.defaultProps = {
  type: "text",
  onlyNumbers: false,
  required: false,
};

export default NumberInput;
