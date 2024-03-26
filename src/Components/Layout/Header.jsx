//import React from "react";
import "../../Styles/Layout/Header.css"; // Importar estilos CSS para el Header

import logoU from "../../Assets/LogoUnicauca.svg";
import EclipseIcon from "../../Assets/eclipse.svg";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="logo-container">
        <a href="/home">
          <img className="logoU" src={logoU} alt="logoUnicauca" />
        </a>
      </div>
      <div className="icon-container">
        <img src={EclipseIcon} alt="Icono" width="30" height="30" />
      </div>
    </header>
  );
};

export default Header;
