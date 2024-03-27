import React, { useState } from "react";
import PropTypes from "prop-types";

import "../../Styles/Components/SelectDropdown.css";

const SelectDropdown = ({ placeholder, options }) => {
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
        <div className="arrow">{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="options">
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
};

export default SelectDropdown;
