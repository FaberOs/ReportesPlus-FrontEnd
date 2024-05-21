import { useState } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useThemeContext } from "../../ThemeContext.jsx";
import "../../Styles/Components/Card.css";

function CardMedia({ imagen, titulo, boton }) {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card-container-ext container-fluid d-flex align-items-center justify-content-center ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={`card-container-int ${isDarkTheme ? "dark-card" : ""}`}
        style={{
          width: "100%",
          height: "330px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          boxShadow: isHovered ? "0px 0px 20px rgba(0, 0, 0, 0.4)" : "",
        }}
      >
        <div className="card-container-imagen d-flex align-items-center justify-content-center">
          <Card.Img className="card-imagen" src={imagen} />
        </div>

        <Card.Body className="card-body d-flex flex-column align-items-center pt-4">
          <Card.Title className="card-titulo">{titulo}</Card.Title>
          <div className="text-center pt-4">{boton}</div>
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
