import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // This line can be omitted if Bootstrap CSS is included in the HTML
import "../../Styles/Layout/Sidebar.css";

import ProfileIcon from "../../Assets/ProfileIcon.svg";
import HomeIcon from "../../Assets/HomeIcon.svg";
import FileSearchIcon from "../../Assets/FileSearchIcon.svg";
import CollegeIcon from "../../Assets/CollegeIcon.svg";
import SubjectIcon from "../../Assets/SubjectIcon.svg";
import SettingsIcon from "../../Assets/SettingsIcon.svg";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="d-flex flex-column align-items-center bg-white sidebar-custom"
      style={{
        width: expanded ? "200px" : "70px",
      }} /* Ancho: expandido / contraido */
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
        to="/consultar/consulta"
        icon={FileSearchIcon}
        label="Consultar"
        expanded={expanded}
      />
      <SidebarOption
        to="/pregrado"
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
        {" "}
        {/* Icono de "Configurar" (empujar a posición inferior)*/}
        <SidebarOption
          to="/configuracion"
          icon={SettingsIcon}
          label="Configurar"
          expanded={expanded}
        />
      </div>
    </div>
  );
};

const SidebarOption = ({ to, icon, label, expanded }) => {
  return (
    <Link to={to} className="d-flex option-container">
      <div className="sidebar-option">
        <img src={icon} alt={label} className="custom-image" />
        {expanded && <span className="custom-label">{label}</span>}
      </div>
    </Link>
  );
};

export default Sidebar;
