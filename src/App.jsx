import "./App.css";

import Header from "./Components/Layout/Header.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import DownloadButton from "./Components/UI/DownloadButton.jsx";

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
        <DownloadButton />
      </div>
    </>
  );
}

export default App;
