import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // This line can be omitted if Bootstrap CSS is included in the HTML
import "../../Styles/Layout/Sidebar2.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (

    <div
      className="d-flex flex-column align-items-center bg-white"
      style={{
        width: expanded ? '200px' : '70px', // Ancho: expandido / contraido
        height: "100vh", // Altura: todo el alto de la pantalla
        transition: 'width 0.7s', // tiempo transición al expandir
        position: "fixed", // Fijar posición,
        top: 0, // Ajustar la posición desde la parte superior
        left: 0, // Ajustar la posición desde el lado izquierdo
        zIndex: 1000, // Posición en la pila de capas (menor al header)
        paddingTop: "100px", // Altura predeterminada desde la parte superior (mostrar primer icono)

      }}
      onMouseEnter={() => setExpanded(true)} // expandir al entrar
      onMouseLeave={() => setExpanded(false)} // contraer al salir
    >
      <SidebarOption to="/perfil" icon="./assets/profile.svg" label="Perfil" expanded={expanded}/>
      <SidebarOption to="/inicio" icon="./assets/group.svg" label="Inicio" expanded={expanded}/>
      <SidebarOption to="/consultar/consulta" icon="./assets/file-search-icon-1.svg" label="Consultar" expanded={expanded}/>
      <SidebarOption to="/pregrado" icon="./assets/group-2.svg" label="Pregrado" expanded={expanded}/>
      <SidebarOption to="/posgrado" icon="./assets/subject-icon-1.svg" label="Posgrado" expanded={expanded}/>
      <div style={{ marginTop: 'auto', width: "100%" }}> {/* Contenedor para el icono de "Configurar" (empujar posición inferior)*/}
        <SidebarOption to="/configuracion" icon="./assets/group-3.svg" label="Configurar" expanded={expanded}/>
      </div>
    </div>
  );
};
// background: "#d798f1", morado
const SidebarOption = ({ to, icon, label, expanded, size}) => {
  return (
    <Link
      to={to} className="d-flex option-container" style={{ /* background: "#d798f1", */ width: "100%", height: "10%", paddingTop: "5px", paddingBottom: "5px", /* border: "1px solid #000" *//*padding: "13px"*/}}>
      <div className='sidebar-option' style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",  justifyContent: "flex-start",  marginLeft:"10%"}}>
        <img src={icon} alt={label} style={{ marginLeft: '15px', width: "25px", height: "25px" }} />
        {expanded && <span style={{ marginLeft: '15px', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>}
      </div>
    </Link>
  );
};

export default Sidebar;

/*
<div class="container-fluid bg-secondary"> <!-- Contenedor exterior con color de fondo diferente -->
  <div class="row">
    <div class="col-lg-9 contenedor-interno">
      <!-- Contenido del contenedor interno -->
      <h1>Contenedor Interno</h1>
      <p>Este es el contenido del contenedor interno que ocupa 3/4 del contenedor exterior.</p>
    </div>
  </div>
</div>
*/

/*<Link to={to} className="d-flex align-items-center sidebar-option" style={{ background: "#d9d9d9", width: "100%", justifyContent: "center", alignItems: "center", padding: "13px" }}>
  <div >
    <img src={icon} alt={label} style={{ width: size, height: size }} />
    {expanded && <span style={{ marginLeft: '15px' }}>{label}</span>}
  </div>
</Link>

/* return (
  <div className={`sidebar-option ${expanded ? '' : 'd-flex'}`} style={{ paddingLeft: '15px', width: "100%", justifyContent: "center", padding: "13px" }}>
    <div className="d-flex align-items-center">
      <img src={icon} alt={label} style={{ width: size, height: size }} />
      {expanded && <span style={{ marginLeft: '15px' }}>{label}</span>}
    </div>
  </div>
); */
