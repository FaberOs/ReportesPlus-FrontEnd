import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";

import Card from "../Components/Common/Card.jsx";
import imgCard1 from "../Assets/SubjectIconWhite.svg";
import imgCard2 from "../Assets/CollegeIconWhite.svg";
import imgCard3 from "../Assets/DependenceIconWhite.svg";
import SimpleButton from "../Components/UI/SimpleButton.jsx";
import "../Styles/Layout/Home.css";

function Home() {
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
        <div
          className={`container-fluid d-flex align-items-center justify-content-center mt-5 mb-5 ${
            isDarkTheme ? "dark-home" : ""
          }`}
        >
          <div className="row home-cards-container">
            {" "}
            {/* fila ancho contenedor */}
            <div className="col-12">
              {" "}
              {/* columna ancho total 12 */}
              {/* contenedor titulo */}
              <div className="row home-titulo">
                <div className="home-titulo-linea col-md-12 ">
                  <h1 className="home-titulo-texto d-flex justify-content-center">
                    Reportes Finanzas
                  </h1>
                </div>
              </div>
              {/* contenedor cards */}
              <div className="row ">
                {/* col-md-4 */}
                <div className=" col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center pt-4">
                  <Card
                    imagen={imgCard1}
                    titulo="Reporte Posgrado"
                    boton={<SimpleButton buttonText="CONSULTAR" />}
                  ></Card>
                </div>
                <div className=" col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center pt-4">
                  <Card
                    imagen={imgCard2}
                    titulo="Reporte Pregrado"
                    boton={<SimpleButton buttonText="CONSULTAR" />}
                  ></Card>
                </div>
                <div className=" col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center pt-4">
                  <Card
                    imagen={imgCard3}
                    titulo="Reporte por Dependencia"
                    boton={<SimpleButton buttonText="CONSULTAR" />}
                  ></Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
