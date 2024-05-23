import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ImagenI from "../../Assets/Information.svg";
import ImagenW from "../../Assets/Advertencia.svg";
import ImagenE from "../../Assets/Error.svg";
import ImagenS from "../../Assets/Success.svg";
import ImagenU from "../../Assets/User.svg";
import Cookies from 'js-cookie';



const ToastNotify = ({ accionar, tipo, msj }) => {

  const [showA, setShowA] = useState(accionar);
  const toggleShowA = () => {
    setShowA(!showA);
    setTipo("");
  };

  const TipoToast = () => {
/*
    if(localStorage.getItem("User") == 2){
      //alert('cambio',localStorage.getItem("User"));
      localStorage.setItem("User",0);
    }*/
    
    //uso cookies
    if(Cookies.get('user') == 2){
      Cookies.set('user', 0, { path: '/' });
    }
  
    if (tipo == "I"){
      return (
            <Toast show={showA} onClose={toggleShowA} bg={"info"}>
              <Toast.Body>
                <Row md={0}>
                  <Col>
                    <img className="imagi" src={ImagenI} alt="imagen" />
                  </Col>
                  <Col className="textdisposicion" xs={7}>
                    <h5>
                      <strong className="me-auto text-white">Info</strong>
                    </h5>
                    <h6 className="text-white">
                      {msj}
                    </h6>
                  </Col>
                  <Col>
                    <button
                      type="button"
                      className="btn-close active me-1 m-1 btn btn-outline-light "
                      data-bs-dismiss="toast"
                      aria-label="Close"
                      onClick={toggleShowA}
                    ></button>
                  </Col>
                </Row>
              </Toast.Body>
            </Toast>
      );     
  
    }else if (tipo == "W"){
      return (
        
            <Toast show={showA} onClose={toggleShowA} bg={"warning"}>
              <Toast.Body>
                <Row md={0}>
                  <Col>
                    <img className="imagi" src={ImagenW} alt="imagen" />
                  </Col>
                  <Col className="textdisposicion" xs={7}>
                    <h5>
                      <strong className="me-auto text-white">Warning</strong>
                    </h5>
                    <h6 className="text-white">{msj}</h6>
                  </Col>
                  <Col>
                    <button
                      type="button"
                      className="btn-close active me-1 m-1 btn btn-outline-light "
                      data-bs-dismiss="toast"
                      aria-label="Close"
                      onClick={toggleShowA}
                    ></button>
                  </Col>
                </Row>
              </Toast.Body>
            </Toast>
        
      );      
  
    }else if (tipo == "E"){
      return(
        <Toast show={showA} onClose={toggleShowA} bg={"danger"}>
          <Toast.Body>
            <Row md={0}>
              <Col>
                <img className="imagi" src={ImagenE} alt="imagen" />
              </Col>
              <Col className="textdisposicion" xs={7}>
                <h5>
                  <strong className="me-auto text-white">Error</strong>
                </h5>
                <h6 className="text-white">{msj}</h6>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-close active me-1 m-1 btn btn-outline-light "
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={toggleShowA}
                ></button>
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      );
      
    }else if (tipo == "S"){
      return(
        <Toast show={showA} onClose={toggleShowA} bg={"success"}>
          <Toast.Body>
            <Row md={0}>
              <Col>
                <img className="imagi" src={ImagenS} alt="imagen" />
              </Col>
              <Col className="textdisposicion" xs={7}>
                <h5>
                  <strong className="me-auto text-white">Success</strong>
                </h5>
                <h6 className="text-white">{msj}</h6>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-close active me-1 m-1 btn btn-outline-light "
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={toggleShowA}
                ></button>
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      );
      
    }else{
      return(
        <Toast show={showA} onClose={toggleShowA} bg={"secondary"}>
          <Toast.Body>
            <Row md={0}>
              <Col>
                <img className="imagi" src={ImagenU} alt="imagen" />
              </Col>
              <Col className="textdisposicion" xs={7}>
                <h5>
                  <strong className="me-auto text-white">Custom</strong>
                </h5>
                <h6 className="text-white">{msj}</h6>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-close active me-1 m-1 btn btn-outline-light "
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={toggleShowA}
                ></button>
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      );      
    }  
  };

  return (
    <ToastContainer
      position="position-absolute"
      className="top-0 end-0 p-5"
      style={{ zIndex: 1 }}
    > 
    
      <TipoToast />    

    </ToastContainer>
  );
}

export default ToastNotify;
