import "./App.css";

import Header from "./Components/Layout/Header.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import IconButton from "./Components/UI/IconButton.jsx";
import Button from "./Components/UI/Button.jsx";
import SelectDropdown from "./Components/UI/SelectDropdown.jsx";
import Sidebar from "./Components/Layout/Sidebar.jsx";

import DownloadIcon from "./Assets/download.svg";

function App() {
  return (
    <>
      <div>
        <Header title="Reportes Plus" />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <IconButton buttonText="DESCARGAR ARCHIVO" iconSrc={DownloadIcon} />
      </div>
      <div>
        <Button buttonText="INICIAR SESIÓN" />
      </div>
      <div>
        <SelectDropdown
          placeholder="Selecciona una opción"
          options={["Opción 1", "Opción 2", "Opción 3", "Opción 4"]}
        />
      </div>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
