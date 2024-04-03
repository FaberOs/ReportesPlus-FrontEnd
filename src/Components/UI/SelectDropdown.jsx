import React, { useState } from "react";
import PropTypes from "prop-types";

import "../../Styles/Components/SelectDropdown.css";

const SelectDropdown = ({ placeholder, options, downIconSrc, upIconSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="control" onClick={toggleDropdown}>
        <div className="selectedValue">{selectedOption}</div>

        {/* Muestra la imagen correspondiente dependiendo del estado isOpen */}
        {isOpen ? (
          <img src={upIconSrc} alt="Up Arrow" className="select-icon" />
        ) : (
          <img src={downIconSrc} alt="Down Arrow" className="select-icon" />
        )}
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={onOptionClicked(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SelectDropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
  downIconSrc: PropTypes.string.isRequired,
  upIconSrc: PropTypes.string.isRequired,
};

export default SelectDropdown;
