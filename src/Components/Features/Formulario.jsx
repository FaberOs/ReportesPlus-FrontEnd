import React from "react";
import "../../Styles/Components/Formulario.css";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import searchIcon from '../../Assets/Calendar.svg';
import Button_C from "../../Components/UI/Button_C.jsx";

const Formulario = () => {
    return (

        <div className="bg-infoo">
            <h1 className='titulo-formulario'>
                Reportes Posgrado
            </h1>

            <Button variant="outline" size="lg" className="w-100 d-flex  justify-content-between align-items-center" style={{ backgroundColor: '#FFFFFF', borderWidth: '3px', borderRadius: '25px', borderColor: '#000066', color: '#000066', fontSize: '16px' }}>
                Selecciona la Vigencia
                <img src={searchIcon} alt="Search Icon" style={{ width: '24px', height: '24px' }} />
            </Button>

            <h3 className='codigo-formulario'>Código</h3>

            <Form.Group
                className="mb-3"
                controlId="Codigo"
            >
                <Form.Control type="Codigo" placeholder="140012" style={{ borderRadius: "25px", border: "3px solid #000066", borderColor: "#000066" }}
                />
            </Form.Group>

            <div class="text-center bg-warningg">
                <Button_C buttonText="CONSULTAR" />
            </div>


        </div>

    );
};

export default Formulario;