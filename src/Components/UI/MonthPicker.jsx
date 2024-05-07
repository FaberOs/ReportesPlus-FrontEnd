// DatePicker.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import "../../Styles/Components/MonthPicker.css";
import { useThemeContext } from "../../ThemeContext.jsx";

const MonthPicker = ({ label, placeholder, onChange  }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange && date) {
      // Formato "MM/yyyy"
      onChange(`${date.getMonth() + 1}/${date.getFullYear()}`);
    }
  };

  const today = new Date();
  const minDate = new Date(2021, 0); // Enero 2021
  const maxDate = new Date(today.getFullYear(), today.getMonth()); // Mes actual

  return (
    <div className={`monthpicker-container ${isDarkTheme ? "dark-theme" : ""}`}>
      <label className={`monthpicker-label ${isDarkTheme ? "dark-label" : ""}`}>
        {label}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText={placeholder}
        locale={es}
        minDate={minDate}
        maxDate={maxDate}
        className={`monthpicker ${isDarkTheme ? "dark-input" : ""}`}
      />
    </div>
  );
};

MonthPicker.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default MonthPicker;