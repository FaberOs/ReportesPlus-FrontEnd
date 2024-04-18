import { useState } from "react";
import React from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveTable from "./ResponsiveTable.jsx";

//json de prueba
import JsonData from './data.json';

function ControlledTabs() {
  const [key, setKey] = useState("home");

  // titulos de las columnas
  const lista = ['id','name','city',"dirrecion"];
  const lista2 = ['idsss','nameddd','cityfff',"dirreciongg"];

  // se castea el json para que quede como tabla
  const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
          <td>{info.dirreccion}</td>
          <td>{info.dirreccion}</td>
          <td>{info.dirreccion}</td>
          <td>{info.dirreccion}</td>
          <td>{info.dirreccion}</td>
          <td>{info.dirreccion}</td>
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
            <ResponsiveTable  data={DisplayData} lista={lista}/>
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
