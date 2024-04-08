import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";

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
        <ConsultForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserConsult;
