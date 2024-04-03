import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserConsult from "./Pages/UserConsult";
import TablaConsulta from "./Pages/TablaConsulta";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/consultar" element={<UserConsult />} />
        </Routes>
        <Routes>
          <Route path="/consultar/consulta" element={<TablaConsulta />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
