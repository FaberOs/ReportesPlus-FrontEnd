import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Layout/Sidebar.css";
import { useThemeContext } from "../../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faSearch,
  faUniversity,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import ThemeToggler from "../Features/ThemeToggler";

const Sidebar = () => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <div
      className={`sidebar-custom d-flex flex-column align-items-center ${
        isDarkTheme ? "dark-sidebar" : ""
      }`}
      style={{ width: "200px" }}
    >
      <SidebarOption to="" icon={faUser} label="Perfil" />
      <SidebarOption to="/admin/dashboard" icon={faHome} label="Inicio" />
      <SidebarOption to="/home" icon={faSearch} label="Consultar" />
      <SidebarOption
        to="/admin/pregrados"
        icon={faGraduationCap}
        label="Pregrado"
      />
      <SidebarOption
        to="/admin/posgrados"
        icon={faUniversity}
        label="Posgrado"
      />
      <div
        className="d-flex justify-content-center mb-3"
        style={{ marginTop: "auto", width: "100%" }}
      >
        <ThemeToggler />
      </div>
    </div>
  );
};

const SidebarOption = ({ to, icon, label }) => {
  return (
    <Link to={to} className="d-flex option-container">
      <div className="sidebar-option">
        <FontAwesomeIcon icon={icon} className="custom-icon" />
        <span className="custom-label">{label}</span>
      </div>
    </Link>
  );
};

export default Sidebar;

/* const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="d-flex flex-column align-items-center bg-white sidebar-custom"
      style={{
        width: expanded ? "200px" : "70px",
      }} /* Ancho: expandido / contraido 
      onMouseEnter={() => setExpanded(true)} // expandir al entrar
      onMouseLeave={() => setExpanded(false)} // contraer al salir
    >
      <SidebarOption
        to=""
        icon={ProfileIcon}
        label="Perfil"
        expanded={expanded}
      />
      <SidebarOption
        to="/inicio"
        icon={HomeIcon}
        label="Inicio"
        expanded={expanded}
      />
      <SidebarOption
        to="/consultar"
        icon={FileSearchIcon}
        label="Consultar"
        expanded={expanded}
      />
      <SidebarOption
        to="/admin/pregrados"
        icon={CollegeIcon}
        label="Pregrado"
        expanded={expanded}
      />
      <SidebarOption
        to="/admin/posgrados"
        icon={SubjectIcon}
        label="Posgrado"
        expanded={expanded}
      />
      <div style={{ marginTop: "auto", width: "100%" }}>
        
        <SidebarOption
          to="/configuracion"
          icon={SettingsIcon}
          label="Configurar"
          expanded={expanded}
        />
      </div>
    </div>
  );
}; */

/* const SidebarOption = ({ to, icon, label, expanded }) => {
  return (
    <Link to={to} className="d-flex option-container">
      <div className="sidebar-option">
        <img src={icon} alt={label} className="custom-image" />
        {expanded && <span className="custom-label">{label}</span>}
      </div>
    </Link>
  );
}; 

export default Sidebar; */
