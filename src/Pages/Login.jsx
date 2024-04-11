import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";

import TextInput from "../Components/UI/TextInput.jsx";

import LoginPic from "../Assets/AdminLoginPic.png";

function UserConsult() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "Login";
  }, [location]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ConsultForm
          imagen={LoginPic}
          titulo="Inicio de Sesión"
          TextInput1={<TextInput label="Usuario" placeholder="" />}
          TextInput2={<TextInput label="Contraseña" placeholder="" />}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserConsult;
