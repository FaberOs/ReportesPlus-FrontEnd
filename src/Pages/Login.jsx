import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useThemeContext } from "../ThemeContext.jsx";
import { useAuth } from "../Context/AuthProvider.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";
import TextInput from "../Components/UI/TextInput.jsx";
import SimpleButton from "../Components/UI/SimpleButton.jsx";
import ToastNotify from "../Components/Common/ToastNotify.jsx";

import LoginPic from "../Assets/AdminLoginPic.png";

const EstadoSesion = ({ username }) => {
  console.log("Estado sesion username: ", username);
  return (
    <div>
      <Header username={username} />
    </div>
  );
};

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState("");
  const [accionT, setAccionT] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [location, isDarkTheme]);

  const handleUsernameChange = (event) => {
    setAccionT(false);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setAccionT(false);
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
      login(); // Actualiza el estado de autenticación
      navigate("/home"); // Redirigir a la ruta de consulta
    } catch (error) {
      console.error("Error de autenticación", error);
      if (error.response && error.response.status === 401) {
        localStorage.setItem("User",3);
        setEstado("E");
        setAccionT(true);
        setMessage("Credenciales invalidas");
        alert("Credenciales inválidas"); // Notificar al usuario
      } else {
        localStorage.setItem("User",3);
        setEstado("E");
        setAccionT(true);
        setMessage("Error en el servidor");
      }
    }
  };

  const handleLogout = () => {
    setEstado("E");
    setAccionT(true);
    setMessage("Error en el servidor");
    navigate("/login"); // o la ruta que corresponda a tu página de login
  };

  const Notificacion = () => {
    if (localStorage.getItem("User") == 2) {    
      setEstado("S");
      setAccionT(true);
      setMessage("sesion cerrada");    
      localStorage.setItem("User",3);       
    }else if(localStorage.getItem("User") == 3){
      localStorage.setItem("User",0);
      return <ToastNotify accionar={accionT} tipo={estado} msj={message} />;
    }
    
  };

  return (
    <div>
      <header>
      <div>
      <Header username={username} />
      </div>
      </header>
      <main>
        <>
          <ConsultForm
            imagen={LoginPic}
            titulo="Inicio de Sesión"
            input1={
              <TextInput
                label="Usuario"
                onChange={(value) => setUsername(value)}
                placeholder=""
                required={true}
              />
            }
            input2={
              <TextInput
                label="Contraseña"
                type="password"
                onChange={(value) => setPassword(value)}
                placeholder=""
                required={true}
              />
            }
            boton={
              <SimpleButton
                buttonText="INICIAR SESIÓN"
                onClick={handleSubmit}
                variant="default"
              />
            }
          />
          <Notificacion />
        </>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;