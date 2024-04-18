//import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Layout/StyleTabla.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../UI/IconButton.jsx";
import ResponsiveTable from "./ResponsiveTable.jsx";

import ControlledTabs from "./ControlledTabs.jsx";

//json de prueba
import JsonData from './data.json';

const Tableinfo = () => {

   // titulos de las columnas
  const lista3 = ['id','name','city',"dirrecion"];

   // se castea el json para que quede como tabla
  const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
          <td>{info.dirreccion}</td>
				</tr>
			)
		}
	)

  return (
    <div>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <div className="contenedorTitulo">
            <div>
              <h1>REPORTE GENERAL DE POSGRADOS</h1>
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
              <h1>RELACIÓN DE RECAUDOS NETOS MENOS CERTIFICADOS</h1>
            </div>
            <div>
              <ResponsiveTable  data={DisplayData} lista={lista3}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tableinfo;
