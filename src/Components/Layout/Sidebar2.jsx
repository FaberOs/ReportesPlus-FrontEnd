import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // This line can be omitted if Bootstrap CSS is included in the HTML
import "../../Styles/Layout/Sidebar2.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="d-flex flex-column align-items-center bg-white sidebar-custom }"
      style={{ width: expanded ? '200px' : '70px' }} /* Ancho: expandido / contraido */
      onMouseEnter={() => setExpanded(true)} // expandir al entrar
      onMouseLeave={() => setExpanded(false)} // contraer al salir
    >
      <SidebarOption to="" icon="./assets/profile.svg" label="Perfil" expanded={expanded} />
      <SidebarOption to="/inicio" icon="./assets/group.svg" label="Inicio" expanded={expanded} />
      <SidebarOption to="/consultar/consulta" icon="./assets/file-search-icon-1.svg" label="Consultar" expanded={expanded} />
      <SidebarOption to="/pregrado" icon="./assets/group-2.svg" label="Pregrado" expanded={expanded} />
      <SidebarOption to="/posgrado" icon="./assets/subject-icon-1.svg" label="Posgrado" expanded={expanded} />
      <div style={{ marginTop: 'auto', width: "100%" }}> {/* Icono de "Configurar" (empujar a posición inferior)*/}
        <SidebarOption to="/configuracion" icon="./assets/group-3.svg" label="Configurar" expanded={expanded} />
      </div>
    </div>
  );
};

const SidebarOption = ({ to, icon, label, expanded }) => {
  return (
    <Link
      to={to} className="d-flex option-container">
      <div className="sidebar-option">
        <img src={icon} alt={label} className="custom-image" />
        {expanded && <span className="custom-label">{label}</span>}
      </div>
    </Link>
  );
};

export default Sidebar;