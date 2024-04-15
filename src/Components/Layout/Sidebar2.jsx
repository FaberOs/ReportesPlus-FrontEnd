import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This line can be omitted if Bootstrap CSS is included in the HTML
import { Last } from 'react-bootstrap/esm/PageItem';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="d-flex flex-column align-items-center bg-white"
      style={{
        width: expanded ? '220px' : '80px', // Ancho: expandido, contraido
        height: "100vh", // Altura: todo el alto de la pantalla
        transition: 'width 0.7s',
        position: "fixed", // Fijar posición,
        top: 0, // Ajustar la posición desde la parte superior
        left: 0, // Ajustar la posición desde el lado izquierdo
        zIndex: 1000, // Posición en la pila de capas (menor al header)
        paddingTop: "140px", // Altura predeterminada desde la parte superior (mostrar primer icono)

      }}
      onMouseEnter={() => setExpanded(true)} // expandir al entrar
      onMouseLeave={() => setExpanded(false)} // contraer al salir
    >
      <SidebarOption icon="./assets/profile.svg" label="Profile" expanded={expanded} />
      <SidebarOption icon="./assets/group.svg" label="Home" expanded={expanded} />
      <SidebarOption icon="./assets/file-search-icon-1.svg" label="Search" expanded={expanded} />
      <SidebarOption icon="./assets/group-2.svg" label="College" expanded={expanded} />
      <SidebarOption icon="./assets/subject-icon-1.svg" label="Subjects" expanded={expanded} />
      <div style={{ marginTop: 'auto' }}> {/* Contenedor para el icono de Settings (posición inferior)*/}
        <SidebarOption icon="./assets/group-3.svg" label="Settings" expanded={expanded} />
      </div>
    </div>
  );
};

const SidebarOption = ({ icon, label, expanded }) => {
  return (
    <div className="d-flex align-items-center" style={{ marginBottom: '30px' }}>
      <img src={icon} alt={label} style={{ width: '35px', height: '35px' }} />
      {expanded && <span style={{ marginLeft: '10px' }}>{label}</span>}
    </div>
  );
};

export default Sidebar;