import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";

import TextInput from "../Components/UI/TextInput.jsx";
import MonthPicker from "../Components/UI/MonthPicker.jsx";
import ModalButton from "../Components/UI/ModalButton.jsx";

import Sidebar from "../Components/Layout/Sidebar2.jsx";

import Card from "../Components/Layout/Card.jsx"

import ImagenU from "../Assets/ImagenU.png";

function UserConsult() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "UserConsult";
  }, [location]);

  return (
    <div>
      <header>
        <Header />
        <Sidebar />
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
