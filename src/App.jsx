import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthProvider.jsx";

import Sidebar from "./Components/Layout/Sidebar.jsx";
import ConsultPos from "./Pages/ConsultPos";
import ReportePos from "./Pages/ReportePos";
import Login from "./Pages/Login";
import AdminPos from "./Pages/AdminPos";
import Home from "./Pages/Home";
import ConsultMacro from "./Pages/ConsultMacro";
import ReporteMacro from "./Pages/ReporteMacro";

const AdminTemplate = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirecciona a la página de login si el usuario no está autenticado
    return <Navigate to="/login" replace />;
  }

  return children;
};

localStorage.setItem("User",0);
// "User" => 0  sin sesion
// "User" => 1  se inicia sesion
// "User" => 2  sesion cerrada
// "User" => 3  
// "User" => 4  mantiene sesion

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/consultar" element={<ConsultPos />} />
        <Route path="/consultar/reporte-posgrado" element={<ReportePos />} />
        <Route path="/consultar-macro" element={<ConsultMacro />} />
        <Route
          path="/consultar-macro/reporte-macro"
          element={<ReporteMacro />}
        />
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<AdminPos />} />
          <Route path="posgrados" element={<AdminPos />} />
          <Route path="pregrados" element={<AdminPos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
