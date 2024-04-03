//import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Layout/StyleTabla.css";
import IconButton from "../UI/IconButton.jsx";
import ResponsiveTable from "./ResponsiveTable.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ControlledTabs from "./ControlledTabs.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Tableinfo = () => {
  return (
    <body>
      <div>
        <Row>
          <Col sm={9}>
            <div className="contendorTitulo">
              <div>
                <h1>Reporte general de postgrados</h1>
              </div>
              <div>
                <IconButton
                  buttonText="DESCARGAR ARCHIVO"
                  icon={<FontAwesomeIcon icon={faDownload} />}
                />
              </div>
            </div>
            <div className="contenedor">
              <ControlledTabs />
            </div>
            <div className="contenedor-Small">
              <div>
                <h1>Relacion de recaudos netos menos certificados</h1>
              </div>
              <div>
                <ResponsiveTable />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </body>
  );
};

export default Tableinfo;
