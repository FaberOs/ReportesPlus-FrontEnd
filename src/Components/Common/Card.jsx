import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useThemeContext } from "../../ThemeContext.jsx";
import "../../Styles/Components/Card.css";

function CardMedia({ imagen, titulo, boton }) {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    /* container-fluid */
    <div style={{}}>
      <Card
        className={`card-container ${isDarkTheme ? "dark-card" : ""}`}
        style={{ width: "330px", height: "auto", overflow: "hidden" }}
      >
        {/* <Card className="card-container " style={{width: '20rem', height: "auto", overflow: 'hidden'}}> */}

        <div className="card-container-imagen d-flex align-items-center justify-content-center">
          <Card.Img className="card-imagen" src={imagen} />
        </div>

        <Card.Body className="card-body d-flex flex-column align-items-center">
          <Card.Title className="card-titulo">{titulo}</Card.Title>

          <div className="text-center p-4">{boton}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

CardMedia.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  boton: PropTypes.elementType.isRequired,
};

export default CardMedia;
