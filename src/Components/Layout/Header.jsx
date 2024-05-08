import { useRef, useEffect } from "react";
import "../../Styles/Layout/Header.css"; // Importar estilos CSS para el Header
import { useThemeContext } from "../../ThemeContext";
import ThemeToggler from "../Features/ThemeToggler";
import UserMenu from "../Features/UserMenu";

import logoULight from "../../Assets/LogoUnicauca.svg";
import logoUDark from "../../Assets/LogoUnicauca-white.svg";

const Header = () => {
  const headerRef = useRef(null);
  const { contextTheme } = useThemeContext();

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
        <a href="/">
          <img
            className="logoU"
            src={contextTheme === "Light" ? logoULight : logoUDark}
            alt="logoUnicauca"
          />
        </a>
      </div>
      <div className="options-container">
        <ThemeToggler />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
