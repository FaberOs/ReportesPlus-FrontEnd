import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm.jsx";

import TextInput from "../Components/UI/TextInput.jsx";
import MonthPicker from "../Components/UI/MonthPicker.jsx";
import ModalButton from "../Components/UI/ModalButton.jsx";

import ImagenU from "../Assets/SantoDomingo.jpg";

function ConsultMacro() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";
  const [vigencia, setVigencia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");
  const [codigo, setCodigo] = useState("");

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
          console.error("Formato de fecha incorrecto o mes inválido");
        }
      }
    }
  }, [vigencia]);

  useEffect(() => {
    console.log("Estado actualizado: ", { mes, anio, codigo });
  }, [mes, anio, codigo]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ConsultForm
          imagen={ImagenU}
          titulo="Reportes Macro"
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
              placeholder="Ej. 140"
              onChange={(e) => setCodigo(e.target.value)}
            />
          }
          boton={
            <ModalButton
              buttonText="CONSULTAR"
              tituloModal="Confirmación"
              contenidoModal={`Desea generar la consulta para Reporte Macro? Fecha: ${mes} ${anio}, Código: ${codigo}`}
              rutaModal={`/consultar-macro/reporte-macro?mes=${encodeURIComponent(
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

export default ConsultMacro;
