import { useState } from "react";
import { useThemeContext } from "../../ThemeContext";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import {
  faUserCircle,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Components/UserMenu.css";

const UserMenu = () => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("User", 2);
    //console.log("Sesión cerrada por inactividad.");
    navigate("/login"); // o la ruta que corresponda a tu página de login
  };

  return (
    <div className={`user-menu-container ${isDarkTheme ? "dark" : ""}`}>
      <Dropdown
        show={menuOpen}
        onToggle={handleMenuToggle}
        className="user-dropdown"
      >
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className="user-button"
        >
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <span className="user-name">Usuario</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className={`dropdown-menu ${isDarkTheme ? "dark" : ""}`}>
          <Dropdown.Item>
            <FontAwesomeIcon icon={faCog} />
            <span>Configuración</span>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Cerrar sesión</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
