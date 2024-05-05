import { useEffect, useState } from "react";
//import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import ResponsiveTable from "./ResponsiveTable.jsx";
import JsonData from "../Features/data.json";

import "../../Styles/Layout/StyleTabla.css";

function ControlledTabs() {
  const [key, setKey] = useState("ingresos");

  // titulos de las columnas
  const lista2 = ["id", "name", "city", "direcion"];
  const listatitulosingresos = [
    "num",
    "tipo documento",
    "numero documento",
    "fecha",
    "cuenta movimiento",
    "observacion",
    "valor definitivo",
    "valor registro",
    "valor ejecutado",
    "valor pagado",
    "saldo",
    "estado",
    "id",
  ];

  // tratamiento del axios
  const [movimientos, setMovimientos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/posgrados/report/")
      .then((response) => {
        setMovimientos(response.data);
        console.log("respuesta :", movimientos);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setMovimientos([]);
      });

    console.log("respuesta :", movimientos);
  }, []);

  const DisplayDataAxios = movimientos.map((movimiento, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{movimiento.tipo_documento}</td>
        <td>{movimiento.numero_movimiento}</td>
        <td>{movimiento.fecha}</td>
        <td>{movimiento.cuenta_movimiento}</td>
        <td>{movimiento.observacion}</td>
        <td>{movimiento.valor_definitivo}</td>
        <td>{movimiento.valor_registro}</td>
        <td>{movimiento.valor_ejecutado}</td>
        <td>{movimiento.valor_pagado}</td>
        <td>{movimiento.saldo}</td>
        <td>{movimiento.estado}</td>
        <td>{movimiento.id}</td>
      </tr>
    );
  });

  // MANEJO del json para que quede como tabla
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
        <td>{info.dirreccion}</td>
      </tr>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <Tabs
          id="justify-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 mt-2"
          justify
        >
          <Tab eventKey="ingresos" title="INGRESOS">
            <ResponsiveTable
              data={DisplayDataAxios}
              lista={listatitulosingresos}
            />
          </Tab>
          <Tab eventKey="gastos" title="GASTOS">
            <ResponsiveTable data={DisplayData} lista={lista2} />
          </Tab>
          <Tab eventKey="descuentos" title="DESCUENTOS">
            <ResponsiveTable
              data={DisplayDataAxios}
              lista={listatitulosingresos}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ControlledTabs;
