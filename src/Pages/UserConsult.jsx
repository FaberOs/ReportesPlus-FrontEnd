//import React from "react";

import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ConsultForm from "../Components/Layout/ConsultForm";

function UserConsult() {
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
