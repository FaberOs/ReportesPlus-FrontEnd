import { useRef, useEffect } from "react";
import "../../Styles/Layout/Header.css"; // Importar estilos CSS para el Header

import { useState } from "react";
import ReactSwitch from "react-switch";

import logoULight from "../../Assets/LogoUnicauca.svg";
import logoUDark from "../../Assets/LogoUnicauca-white.svg";
import { useThemeContext } from "../../ThemeContext";
/* import EclipseIcon from "../../Assets/eclipse.svg"; */

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, []);

  /* REACT Switch */
  const { contextTheme, setContextTheme } = useThemeContext();

  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };

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
      <div className="icon-container">
        {/* <img src={EclipseIcon} alt="Icono" width="30" height="30" /> */}
        <ReactSwitch
          checked={checked}
          onChange={handleSwitch}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        ></ReactSwitch>
      </div>
    </header>
  );
};

export default Header;
