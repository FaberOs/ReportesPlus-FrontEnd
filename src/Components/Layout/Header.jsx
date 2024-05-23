import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Layout/Header.css"; // Importar estilos CSS para el Header
import { useThemeContext } from "../../ThemeContext";
import ThemeToggler from "../Features/ThemeToggler";
import UserMenu from "../Features/UserMenu";

import logoULight from "../../Assets/LogoUnicauca.svg";
import logoUDark from "../../Assets/LogoUnicauca-white.svg";
import SimpleButton from "../../Components/UI/SimpleButton.jsx";
import Cookies from 'js-cookie';


const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const { contextTheme } = useThemeContext();
/*
  const ActualizacionSesion = () => {
    //const sesion = useState(localStorage.getItem("User"));
    
    const handleSubmit = () => {
      localStorage.setItem("User",0);
      navigate("/login");
    };

    if (localStorage.getItem("User") == 1 || localStorage.getItem("User") == 4)  {
      return (
        <div>
            <UserMenu /> 
        </div>
      );
    } else {
      return (
        <div>
            <SimpleButton buttonText="INICIAR SESIÓN" onClick={handleSubmit} />
        </div>
      );
    }    
  };
*/

  //uso de cookies
  const ActualizacionSesion = () => {
    
    const handleSubmit = () => {
      Cookies.remove('user');
      Cookies.set('user', 0, { path: '/' });
      navigate("/login");
    };

    if (Cookies.get('user') == 1 || Cookies.get('user') == 4)  {
      return (
        <div>
            <UserMenu /> 
        </div>
      );
    } else {
      return (
        <div>
            <SimpleButton buttonText="INICIAR SESIÓN" onClick={handleSubmit} />
        </div>
      );
    }    
  };

  const Logouniversity = () => {
    if (Cookies.get('user') == 1 || Cookies.get('user') == 4)  {
      return (
        <div>
          <a href="/home">
            <img
              className="logoU"
              src={contextTheme === "Light" ? logoULight : logoUDark}
              alt="logoUnicauca"
            />
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a href="/login">
            <img
              className="logoU"
              src={contextTheme === "Light" ? logoULight : logoUDark}
              alt="logoUnicauca"
            />
          </a>
        </div>
      );
    }
  };

  

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, []);

  return (
    <header ref={headerRef} className="custom-header" id={contextTheme}>
      <div className="logo-container">
        <Logouniversity />
      </div>
      <div className="options-container">
        <ThemeToggler />       
        <ActualizacionSesion />        
      </div>
    </header>
  );
};

export default Header;
