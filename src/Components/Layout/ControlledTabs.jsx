import { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ResponsiveTable from "./ResponsiveTable.jsx";
import JsonData from "../Features/data.json";
import "../../Styles/Layout/StyleTabla.css";

function ControlledTabs({ mes, anio, codigo }) {
  const [key, setKey] = useState("ingresos");
  const [ingresos, setIngresos] = useState([]);
  const [gastos, setGastos] = useState([]);
  const [consolidado, setConsolidado] = useState(null);

  useEffect(() => {
    const fetchIngresos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/posgrados/reporte/ingresos?mes=${mes}&anio=${anio}&codigo=${codigo}`
        );
        setIngresos(response.data.ingresos || []);
      } catch (error) {
        console.error("Error fetching ingresos: ", error);
        setIngresos([]);
      }
    };

    const fetchGastos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/posgrados/reporte/gastos?mes=${mes}&anio=${anio}&codigo=${codigo}`
        );
        setGastos(response.data.listaGastos || []);
      } catch (error) {
        console.error("Error fetching gastos: ", error);
        setGastos([]);
      }
    };

    const fetchConsolidado = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/posgrados/reporte/consolidado?mes=${mes}&anio=${anio}&codigo=${codigo}`
        );
        setConsolidado(response.data);
        console.log("Respuesta consolidado: ", response.data); // Muestra la respuesta actual correctamente
        console.log("Consolidado: ", consolidado); // Muestra el estado anterior a la actualización
      } catch (error) {
        console.error("Error fetching consolidado: ", error);
        setConsolidado(null);
      }
    };

    fetchIngresos();
    fetchGastos();
    fetchConsolidado();
  }, [mes, anio, codigo]);

  const columnTitlesIngresos = [
    "ID",
    "Tipo Documento",
    "Número Documento",
    "Fecha",
    "Cuenta Movimiento",
    "Observación",
    "Valor Ejecutado",
  ];

  const displayDataGastos = gastos.map((gasto, index) => (
    <tr key={gasto.id || index}>
      <td>{gasto.id}</td>
      <td>{gasto.tipo_documento}</td>
      <td>{gasto.numero_movimiento}</td>
      <td>{gasto.fecha}</td>
      <td>{gasto.cuenta_movimiento}</td>
      <td>{gasto.observacion}</td>
      <td>{gasto.valor_definitivo}</td>
      <td>{gasto.valor_registro}</td>
      <td>{gasto.valor_ejecutado}</td>
      <td>{gasto.valor_pagado}</td>
      <td>{gasto.saldo}</td>
      <td>{gasto.estado}</td>
    </tr>
  ));

  const displayDataIngresos = ingresos.map((ingreso, index) => (
    <tr key={ingreso.id || index}>
      <td>{ingreso.id}</td>
      <td>{ingreso.tipo_documento}</td>
      <td>{ingreso.numero_movimiento}</td>
      <td>{ingreso.fecha}</td>
      <td>{ingreso.cuenta_movimiento}</td>
      <td>{ingreso.observacion}</td>
      <td>{ingreso.valor_ejecutado}</td>
    </tr>
  ));

  const displayDataConsolidado = consolidado
    ? [
        <tr key="consolidado">
          <td>{consolidado.codigoPosgrado}</td>
          <td>{consolidado.nombrePosgrado}</td>
          <td>{consolidado.total_ingresos.toLocaleString()}</td>
          <td>{consolidado.total_descuentos.toLocaleString()}</td>
          <td>{consolidado.total_neto.toLocaleString()}</td>
          <td>{consolidado.contribucion.toLocaleString()}</td>
          <td>{consolidado.total_disponible.toLocaleString()}</td>
          <td>{consolidado.gastos_certificados.toLocaleString()}</td>
          <td>{consolidado.saldo.toLocaleString()}</td>
        </tr>,
      ]
    : [
        <tr>
          <td colSpan="9">No data available</td>
        </tr>,
      ];

  const displayDataJson = JsonData.map((info, index) => (
    <tr key={info.id || index}>
      <td>{info.id}</td>
      <td>{info.name}</td>
      <td>{info.city}</td>
      <td>{info.dirreccion}</td>
    </tr>
  ));

  // Se asume que los datos vienen en un solo objeto y no un array, por lo tanto, la conversión a tabla sería directa.

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
              data={displayDataIngresos}
              lista={columnTitlesIngresos}
            />
          </Tab>
          <Tab eventKey="gastos" title="GASTOS">
            <ResponsiveTable
              data={displayDataGastos}
              lista={[
                "ID",
                "Tipo Documento",
                "Número Movimiento",
                "Fecha",
                "Cuenta Movimiento",
                "Observación",
                "Valor Definitivo",
                "Valor Registro",
                "Valor Ejecutado",
                "Valor Pagado",
                "Saldo",
                "Estado",
              ]}
            />
          </Tab>
          <Tab eventKey="descuentos" title="DESCUENTOS">
            <ResponsiveTable
              data={displayDataConsolidado}
              lista={[
                "Código Posgrado",
                "Nombre Posgrado",
                "Total Ingresos",
                "Total Descuentos",
                "Total Neto",
                "Contribución",
                "Total Disponible",
                "Gastos Certificados",
                "Saldo",
              ]}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ControlledTabs;
