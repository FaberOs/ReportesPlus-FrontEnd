import React from "react";
import "../../Styles/Layout/PanelImgText.css";
import imagen from '../../Assets/ImagenU.png';
// src={require('./imagenes/imagen.png')}
//const imagen = require('../../Assets/ImagenU.png');
// src={imagen}
import img from '../../Assets/ImagenU.png';

import Formulario from '../../Components/Features/Formulario.jsx';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const PanelImgText = () => {
    return (
        <div>
            <Container className="mt-5 max-width-none bg-dangerr">
                <div class="container-fluid justify-content-center bg-warningg">
                    <div class="row d-flex">
                        <div class="col-sm-6 bg-secondaryy">
                            <img
                                src={img}
                                alt='Foto de persona'
                                style={{ maxWidth: "100%" }}
                            />
                        </div>
                        <div class="col-sm-6 bg-infoo" style={{ margin: "auto", padding: "20px 60px 5px 60px" }}>
                            <Formulario />
                        </div>
                    </div>
                </div>

            </Container>
        </div>

    );
};

export default PanelImgText;