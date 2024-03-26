//import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import UInfo from "../../Assets/UInfo.svg";
import GovInfo from "../../Assets/GovInfo.svg";
import Telefono from "../../Assets/Telefono.svg";

const Footer = () => {
  return (
    <footer className="bg-light text-muted py-3">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h5 className="text-dark">Universidad del Cauca</h5>
            <p>NIT. 891500319-2</p>
            <img src={UInfo} alt="Logo 1" className="me-2" />
            <img src={GovInfo} alt="Logo 2" className="me-2" />
            {/* Add additional logos as needed */}
          </div>
          <div className="col-4">
            <p>
              Institución con Acreditación de Alta Calidad por 8 años resolución
              MEN 621B de 2019 - Vigilada MinEducación
            </p>
            <p>Comunícate con nuestro Soporte Técnico</p>
          </div>
          <div className="col-4">
            <h5 className="text-dark">Universidad Del Cauca</h5>
            <p>Vicerrectoría Administrativa</p>
            <div className="d-flex align-items-center mt-3">
              <img src={Telefono} alt="Phone" className="me-2" />
              <span>+57 (602) 8209900</span>
            </div>
            <p>Versión 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
