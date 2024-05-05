import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";

import TextInput from "../Components/UI/TextInput.jsx";
import MonthPicker from "../Components/UI/MonthPicker.jsx";
import ModalButton from "../Components/UI/ModalButton.jsx";

import ImagenU from "../Assets/ImagenU.png";

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
          imagen={ImagenU}
          titulo="Reporte Posgrado"
          input1={
            <MonthPicker
              label="Vigencia"
              placeholder="Selecciona la vigencia"
            />
          }
          input2={<TextInput label="Código" placeholder="Ej. 1432007" />}
          boton={
            <ModalButton
              buttonText="CONSULTAR"
              tituloModal="Confirmación"
              contenidoModal="Desea generar la consulta para Reportes Posgrado?"
              rutaModal="/consultar/consulta"
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

export default UserConsult;
