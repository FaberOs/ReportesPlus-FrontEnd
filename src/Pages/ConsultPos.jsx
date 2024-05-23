import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm.jsx";
//import ToastNotify from "../Components/Common/ToastNotify.jsx";

import TextInput from "../Components/UI/TextInput.jsx";
import MonthPicker from "../Components/UI/MonthPicker.jsx";
import ModalButton from "../Components/UI/ModalButton.jsx";

import ImagenU from "../Assets/ImagenU.png";

function ConsultPos() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [vigencia, setVigencia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");
  const [codigo, setCodigo] = useState("");
  //toast
  //const [estado, setEstado] = useState("");
  //const [accionT, setAccionT] = useState("");
  //const [message, setMessage] = useState("");

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [location, isDarkTheme]);

  useEffect(() => {
    if (vigencia) {
      const parts = vigencia.split("/");
      if (parts.length === 2) {
        const mesNumerico = parseInt(parts[0], 10);
        if (!isNaN(mesNumerico) && mesNumerico >= 1 && mesNumerico <= 12) {
          const meses = [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
          ];
          setMes(meses[mesNumerico - 1]);
          setAnio(parts[1]);
        } else {
          //setEstado("E");
          //setAccionT(true);
          //setMessage("Formato de fecha incorrecto o mes inválido");
          console.error("Formato de fecha incorrecto o mes inválido");
        }
      }
    }
  }, [vigencia]);

  useEffect(() => {
    console.log("Estado actualizado: ", { mes, anio, codigo });
  }, [mes, anio, codigo]);
/*
  const Notificacion = () => {  
    
    return(
      <ToastNotify accionar={accionT} tipo={estado} msj={message}/>
    );
    
  };*/

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ConsultForm
          imagen={ImagenU}
          titulo="Reporte Posgrado"
          input1={
            <MonthPicker
              label="Vigencia"
              placeholder="Selecciona la vigencia"
              onChange={(formattedDate) => setVigencia(formattedDate)}
            />
          }
          input2={
            <TextInput
              label="Código"
              placeholder="Ej. 1432007"
              onChange={(e) => setCodigo(e.target.value)}
            />
          }
          boton={
            <ModalButton
              buttonText="CONSULTAR"
              tituloModal="Confirmación"
              contenidoModal={`Desea generar la consulta para Reportes Posgrado? Fecha: ${mes} ${anio}, Código: ${codigo}`}
              rutaModal={`/consultar/reporte-posgrado?mes=${encodeURIComponent(
                mes
              )}&anio=${encodeURIComponent(anio)}&codigo=${encodeURIComponent(
                codigo
              )}`}
            />
          }
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ConsultPos;
