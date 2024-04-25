import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function ResponsiveTable() {
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

           
    }, []);

    console.log("respuesta :", movimientos);

    return (
        <Table responsive bordered hover>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Tipo Documento</th>
                    <th>Número Movimiento</th>
                    <th>Fecha</th>
                    <th>Cuenta Movimiento</th>
                    <th>Observación</th>
                    <th>Valor Definitivo</th>
                    <th>Valor Registro</th>
                    <th>Valor Ejecutado</th>
                    <th>Valor Pagado</th>
                    <th>Saldo</th>
                    <th>Estado</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {movimientos.map((movimiento, index) => (
                    <tr key={index}>
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
                ))}
            </tbody>
        </Table>
    );
}

export default ResponsiveTable;
