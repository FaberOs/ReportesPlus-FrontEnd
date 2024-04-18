//import React from 'react';
import React, { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';
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
  const lista3 = ['idsss','nameddd','cityfff',"dirreciongg"];
  const lista0 = ['num','tipo documento','numero documento',"fecha","cuenta movimiento","observacion","valor definitivo","valor registro","valor ejecutado","valor pagado","saldo","estado","id"];

  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/api/v1/posgrados/report/')
          .then(response => {
              setMovimientos(response.data);
              console.log("respuesta :", movimientos);
          })
          .catch(error => {
              console.error("Error fetching data: ", error);
              setMovimientos([]);
          });

          console.log("respuesta :", movimientos);
  }, []);

   // se castea el json para que quede como tabla
  const DisplayData=movimientos.map(
		(info,index)=>{
			return(
				<tr>
          <td>{index + 1}</td>
					<td>{info.tipo_documento}</td>
					<td>{info.numero_movimiento}</td>
          <td>{info.cuenta_movimiento}</td>
          <td>{info.observacion}</td>
          <td>{info.valor_definitivo}</td>
          <td>{info.valor_registro}</td>
          <td>{info.valor_ejecutado}</td>
          <td>{info.valor_pagado}</td>
          <td>{info.saldo}</td>
          <td>{info.estado}</td>
          <td>{info.id}</td>
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
              <ResponsiveTable  data={DisplayData} lista={lista0}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tableinfo;
