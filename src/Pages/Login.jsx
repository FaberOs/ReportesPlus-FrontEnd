import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";
import TextInput from "../Components/UI/TextInput.jsx";
import SimpleButton from "../Components/UI/SimpleButton.jsx";

import LoginPic from "../Assets/AdminLoginPic.png";

function UserConsult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [location, isDarkTheme]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/login", {
        usuario: username,
        clave: password,
      });
      console.log(response.data); // Mostrar la respuesta del servidor
      navigate("/home"); // Redirigir a la ruta de consulta
    } catch (error) {
      console.error("Error de autenticación", error);
      if (error.response && error.response.status === 401) {
        alert("Credenciales inválidas"); // Notificar al usuario
      } else {
        alert("Error en el servidor");
      }
    }
  };

  const handleLogout = () => {
    console.log("Sesión cerrada por inactividad.");
    navigate("/login"); // o la ruta que corresponda a tu página de login
  };

  useEffect(() => {
    const events = ["click", "load", "keydown"];

    const resetTimer = () => {
      clearTimeout(timer);
      setTimer(setTimeout(handleLogout, 30 * 60 * 1000)); // 30 minutos
    };

    for (const event of events) {
      window.addEventListener(event, resetTimer);
    }

    resetTimer();

    return () => {
      for (const event of events) {
        window.removeEventListener(event, resetTimer);
      }
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ConsultForm
          imagen={LoginPic}
          titulo="Inicio de Sesión"
          input1={
            <TextInput
              label="Usuario"
              value={username}
              onChange={handleUsernameChange}
              placeholder=""
            />
          }
          input2={
            <TextInput
              label="Contraseña"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder=""
            />
          }
          boton={
            <SimpleButton buttonText="INICIAR SESIÓN" onClick={handleSubmit} />
          }
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserConsult;
