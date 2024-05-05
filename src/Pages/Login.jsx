import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";

import TextInput from "../Components/UI/TextInput.jsx";
import SimpleButton from "../Components/UI/SimpleButton.jsx";

import LoginPic from "../Assets/AdminLoginPic.png";

function UserConsult() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [location, isDarkTheme]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ConsultForm
          imagen={LoginPic}
          titulo="Inicio de Sesión"
          input1={<TextInput label="Usuario" placeholder="" />}
          input2={<TextInput label="Contraseña" placeholder="" />}
          boton={<SimpleButton buttonText="INICIAR SESIÓN" />}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserConsult;
