import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import Tableinfo from "../Components/Layout/Tableinfo.jsx";

function TablaConsulta() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "TablaConsulta";
  }, [location]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Tableinfo />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default TablaConsulta;
