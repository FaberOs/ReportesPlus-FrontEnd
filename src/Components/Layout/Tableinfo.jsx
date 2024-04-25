import React, { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Layout/StyleTabla.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../UI/IconButton.jsx";
import ResponsiveTable from "./ResponsiveTable.jsx";
import ControlledTabs from "./ControlledTabs.jsx";
import axios from "axios";
import * as XLSX from 'xlsx';


const Tableinfo = () => {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/posgrados/report/')
        .then(response => {
            setMovimientos(response.data);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setMovimientos([]);
        });
  }, []);

  const handleDownloadExcel = () => {
    console.log("Datos a exportar:", movimientos);
    const worksheet = XLSX.utils.json_to_sheet(movimientos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Movimientos');
    XLSX.writeFile(workbook, 'Movimientos.xlsx');
  };

  return (
    <div>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <div className="contenedorTitulo">
            <div>
              <h1>REPORTE GENERAL DE POSGRADOS</h1>
            </div>
            <div onClick={handleDownloadExcel}>
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
              <ResponsiveTable />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tableinfo;
