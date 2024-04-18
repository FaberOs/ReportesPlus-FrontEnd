//import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/Layout/Footer.css"; // Archivo CSS para estilos personalizados

import UInfo from "../../Assets/UInfo.svg";
import GovInfo from "../../Assets/GovInfo.svg";
import LogoIcontec from "../../Assets/LogoIcontec.svg";
import Telefono from "../../Assets/Telefono.svg";

const Footer = () => {
  return (
    <div className="main-footer">
      <Container>
        <Row className="footer-row">
          {/* Columna 1 */}
          <Col md={1} sm={1} className="columna">
            <div>{/* Columna vacía */}</div>
          </Col>
          {/* Columna 2 */}
          <Col md={4} sm={4} className="columna">
            <div className="universidad-info">
              <h4>Universidad del Cauca</h4>
              <p>NIT. 891500319-2</p>
              <div className="logos">
                <img src={UInfo} alt="Logo 1" className="logo1" />
                <img src={LogoIcontec} alt="Logo 2" className="logo2" />
                <img src={GovInfo} alt="Logo 3" className="logo3" />
              </div>
            </div>
          </Col>
          {/* Columna 3 */}
          <Col md={1} sm={1} className="columna">
            <div>{/* Columna vacía */}</div>
          </Col>
          {/* Columna 4 */}
          <Col md={2} sm={6} className="columna right-align">
            <div>
              <p>Universidad Del Cauca</p>
              <p>Vicerrectoría Administrativa</p>
              <div className="telefono-wrapper">
                <img src={Telefono} alt="TelIcon" width="14" height="14" />
                <span>+57 (602) 8209900</span>
              </div>
            </div>
          </Col>
          {/* Columna 5 */}
          <Col md={3} sm={6} className="columna left-align">
            <div>
              <p>Sistema De Contratación Y Seguimiento</p>
              <p>
                División De Las Tecnologías De La Información Y Comunicaciones
              </p>
              <p>Versión 1.0.0</p>
            </div>
          </Col>
          {/* Columna 6 */}
          <Col md={1} sm={1} className="columna">
            <div>{/* Columna vacía */}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="footer-bottom text-center">
              <p>
                Institución con Acreditación de Alta Calidad por 8 años
                resolución MEN 621B de 2019 - Vigilada MinEducación
              </p>
              <p>Comunícate con nuestro Soporte Técnico</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
