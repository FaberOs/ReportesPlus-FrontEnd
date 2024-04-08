// DatePicker.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import "../../Styles/Components/MonthPicker.css";

const MonthPicker = ({ label, placeholder }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const minDate = new Date(2020, 0); // Enero 2020
  const maxDate = new Date(today.getFullYear(), today.getMonth()); // Mes actual

  return (
    <div className="monthpicker-container">
      <label className="monthpicker-label">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText={placeholder}
        locale={es}
        minDate={minDate}
        maxDate={maxDate}
        className="monthpicker"
      />
    </div>
  );
};

MonthPicker.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default MonthPicker;
