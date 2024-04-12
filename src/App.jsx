import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import UserConsult from "./Pages/UserConsult";
import TablaConsulta from "./Pages/TablaConsulta";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/consultar" element={<UserConsult />} />
          <Route path="/consultar/consulta" element={<TablaConsulta />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
