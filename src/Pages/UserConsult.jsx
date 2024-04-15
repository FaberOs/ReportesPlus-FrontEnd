import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";

import TextInput from "../Components/UI/TextInput.jsx";
import MonthPicker from "../Components/UI/MonthPicker.jsx";

import Sidebar from "../Components/Layout/Sidebar2.jsx";

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
      </header>
      <main>
        <Sidebar />
        <ConsultForm
          imagen={ImagenU}
          titulo="Reporte Posgrado"
          TextInput1={
            <MonthPicker
              label="Vigencia"
              placeholder="Selecciona la vigencia"
            />
          }
          TextInput2={<TextInput label="Código" placeholder="Ej. 1432007" />}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserConsult;
