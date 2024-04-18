import React, { useEffect, useState } from 'react';
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveTable from "./ResponsiveTable.jsx";
import axios from 'axios';

//json de prueba
import JsonData from './data.json';

function ControlledTabs() {
  const [key, setKey] = useState("home");

  // titulos de las columnas
  const lista2 = ['idsss','nameddd','cityfff',"dirreciongg"];
  const listatitulosingresos = ['num','tipo documento','numero documento',"fecha","cuenta movimiento","observacion","valor definitivo","valor registro","valor ejecutado","valor pagado","saldo","estado","id"];

  // tratamiento del axios
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
 
  const DisplayDataAxios=movimientos.map(
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

  // MANEJO del json para que quede como tabla
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
    <Container classname="py-4">
      <Row className="justify-content-center">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="INGRESOS">
            <ResponsiveTable  data={DisplayDataAxios} lista={listatitulosingresos}/>
          </Tab>
          <Tab eventKey="profile" title="GASTOS">         
            <ResponsiveTable  data={DisplayData} lista={lista2}/>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default ControlledTabs;
