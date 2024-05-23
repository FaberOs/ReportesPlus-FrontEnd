
// instalar "npm install js-cookie —save"
// para usar "import Cookies from ‘js-cookie’;"  -- Cookies.set(‘miCookie’, ‘miValor’, { expires: 7 });  --- console.log(Cookies.get(‘miCookie’)); --- Cookies.remove(‘miCookie’);

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
import Cookies from 'js-cookie';

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

//localStorage.setItem("User",0);
// "User" => 0  sin sesion
// "User" => 1  se inicia sesion
// "User" => 2  sesion cerrada
// "User" => 3  
// "User" => 4  mantiene sesion

const VerificarSesion = () => {
  if (Cookies.get('user') == 1 || Cookies.get('user') == 4)  {
    Cookies.set('user', 4, { path: '/' });
  }
  else{
    Cookies.set('user', 0, { path: '/' });
  }

};
//uso de cookies
//Cookies.set('user', 0, { path: '/' });
// "User" => 0  sin sesion
// "User" => 1  se inicia sesion
// "User" => 2  sesion cerrada
// "User" => 3  
// "User" => 4  mantiene sesion

function App() {

  return (
    <>
      <div>
        <VerificarSesion />
      </div>
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
