import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Layout/Header.css"; // Importar estilos CSS para el Header
import { useThemeContext } from "../../ThemeContext";
import ThemeToggler from "../Features/ThemeToggler";
import UserMenu from "../Features/UserMenu";

import logoULight from "../../Assets/LogoUnicauca.svg";
import logoUDark from "../../Assets/LogoUnicauca-white.svg";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const { contextTheme } = useThemeContext();

  const ActualizacionSesion = () => {
    if (
      localStorage.getItem("User") == 1 ||
      localStorage.getItem("User") == 4
    ) {
      return (
        <div>
          <UserMenu />
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
        <a href="/home">
          <img
            className="logoU"
            src={contextTheme === "Light" ? logoULight : logoUDark}
            alt="logoUnicauca"
          />
        </a>
      </div>
      <div className="options-container">
        <ThemeToggler />
        <ActualizacionSesion />
      </div>
    </header>
  );
};

export default Header;
