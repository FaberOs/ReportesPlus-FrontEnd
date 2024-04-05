//simport React from "react";
import React, { useState } from 'react';
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import "../../Styles/Components/SimpleButton.css";

import ModalGeneric from '../Common/Modal.jsx';

const SimpleButton = ({ buttonText }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-button" variant="primary" type="submit" onClick={handleShow}>{buttonText}</button>
      <ModalGeneric show={show} handleClose={handleClose}/>
    </>
  );
};

// Define PropTypes para asegurarte de que se pasen las props correctamente
SimpleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SimpleButton;
