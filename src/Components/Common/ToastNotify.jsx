import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ImagenI from "../../Assets/informacion.png";
import ImagenW from "../../Assets/Warning.png";
import ImagenE from "../../Assets/error.png";
import ImagenS from "../../Assets/Success.png";
import "../../Styles/Components/Toast.css";

function ToastNotify({ accionar, tipo }) {
  const [showA, setShowA] = useState(accionar);
  const toggleShowA = () => setShowA(!showA);

  return (
    <ToastContainer
      position="position-absolute"
      className="top-0 end-0 p-5"
      style={{ zIndex: 1 }}
    >
      {tipo === "I" ? (
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
                  Information notification message.
                </h6>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-close active me-1 m-1 btn btn-outline-light "
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      ) : tipo === "W" ? (
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
                <h6 className="text-white">Warning notification message.</h6>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-close active me-1 m-1 btn btn-outline-light "
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      ) : tipo === "E" ? (
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
                <h6 className="text-white">Error notification message.</h6>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-close active me-1 m-1 btn btn-outline-light "
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      ) : (
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
                <h6 className="text-white">Success notification message.</h6>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-close active me-1 m-1 btn btn-outline-light "
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      )}
    </ToastContainer>
  );
}

export default ToastNotify;
