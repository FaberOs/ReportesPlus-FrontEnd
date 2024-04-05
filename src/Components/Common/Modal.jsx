import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import '../../Styles/Components/ModalStyles.css';
import SimpleButton from "../UI/SimpleButton.jsx";
import "../../Styles/Components/SimpleButton.css";
import advertenciaico from "../../Assets/advertencia.png";

const ModalGeneric = ({show, handleClose})  =>{
    //<Modal.Header >
    //      <Modal.Title>Usuarios</Modal.Title>
    //</Modal.Header>
    //<Modal.Footer>
    //</Modal.Footer>
    /*<Button type="button" className="btn btn-button" onClick={handleClose}>
                        No
                    </Button>
                    <Link to="/consultar/consulta">
                        <Button type="button" className="btn btn-button " onClick={handleClose} >
                            Si
                        </Button>
                    </Link>


                    <SimpleButton buttonText="No"  onClick={handleClose}/>
                    <Link to="/consultar/consulta">
                        <SimpleButton buttonText="Si"  />
                    </Link>
*/

    
    return (
    <Modal  show={show} 
    onHide={handleClose} 
    backdrop="static"
    keyboard={false}
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Body  >
            <div>
                <div className="Modal-icon">
                    <img className="advertenciaico" src={advertenciaico} alt="advertencia" width="90" height="90"/>
                </div>
                <div className="Modal-header1">
                    Usuarios
                </div>
                <div className="modal-body1">
                    seguro desea generar el usuario?
                </div>
                <div className="modal-footer1">
                    <Button type="button" className="btn btn-button" onClick={handleClose}>
                        No
                    </Button>
                    <Link to="/consultar/consulta">
                        <Button type="button" className="btn btn-button " onClick={handleClose} >
                            Si
                        </Button>
                    </Link>
                </div>
            </div>            
        </Modal.Body>
    </Modal>
    );

}
export default ModalGeneric;
