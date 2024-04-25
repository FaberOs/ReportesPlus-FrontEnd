import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx"; */
import Tableinfo from "../Components/Layout/Tableinfo.jsx";
import Sidebar from "../Components/Layout/Sidebar.jsx";

function AdminPos() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "TablaConsulta";
  }, [location]);

  return (
    <div>
      {/* <header>
        <Header />
      </header> */}
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Tableinfo />
          </div>
        </div>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default AdminPos;
