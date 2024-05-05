import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import UserConsult from "./Pages/UserConsult";
import TablaConsulta from "./Pages/TablaConsulta";
import Login from "./Pages/Login";

import AdminPos from "./Pages/AdminPos";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/consultar" element={<UserConsult />} />
        <Route path="/consultar/consulta" element={<TablaConsulta />} />
        <Route path="/admin/dashboard" element={<AdminPos />} />
        <Route path="/admin/posgrados" element={<AdminPos />} />
        <Route path="/admin/pregrados" element={<AdminPos />} />
      </Routes>
    </>
  );
}

export default App;

/* 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/consultar" element={<UserConsult />} />
        <Route path="/consultar/consulta" element={<TablaConsulta />} />

        {/* Rutas para las vistas de administrador }
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Redirigir cualquier otra ruta a /login }
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
} */

/* function AdminRoutes() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/admin/dashboard" element={<Tableinfo />} />
            <Route path="/admin/posgrados" element={<Tableinfo />} />
            <Route path="/admin/pregrados" element={<Tableinfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App; */
