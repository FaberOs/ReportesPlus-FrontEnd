
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

const ProteccionRutasHome = () =>{
    if(Cookies.get('user') == 1 || Cookies.get('user') == 4){
      return(
        <Home />
      );
    }else{
      return(
        <Navigate to="/login" replace />
      );
    }
  };

  const ProteccionRutasconsultar = () =>{
    if(Cookies.get('user') == 1 || Cookies.get('user') == 4){
      return(
        <ConsultPos />
      );
    }else{
      return(
        <Navigate to="/login" replace />
      );
    }
  };

  const ProteccionRutasReportesPos = () =>{
    if(Cookies.get('user') == 1 || Cookies.get('user') == 4){
      return(
        <ReportePos />
      );
    }else{
      return(
        <Navigate to="/login" replace />
      );
    }
  };

  const ProteccionRutasConsultMacro = () =>{
    if(Cookies.get('user') == 1 || Cookies.get('user') == 4){
      return(
        <ConsultMacro />
      );
    }else{
      return(
        <Navigate to="/login" replace />
      );
    }
  };

  const ProteccionRutasReporteMacro = () =>{
    if(Cookies.get('user') == 1 || Cookies.get('user') == 4){
      return(
        <ReporteMacro />
      );
    }else{
      return(
        <Navigate to="/login" replace />
      );
    }
  };

  const ProteccionRutasAdminTemplate = () =>{
    if(Cookies.get('user') == 1 || Cookies.get('user') == 4){
      return(
        <AdminTemplate />
      );
    }else{
      return(
        <Navigate to="/login" replace />
      );
    }
  };


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

        <Route path="/home" element={<ProteccionRutasHome />} />
        <Route path="/consultar" element={<ProteccionRutasconsultar />} />
        <Route path="/consultar/reporte-posgrado" element={<ProteccionRutasReportesPos />} />
        <Route path="/consultar-macro" element={<ProteccionRutasConsultMacro />} />
        <Route
          path="/consultar-macro/reporte-macro"
          element={<ProteccionRutasReporteMacro />}
        />
        <Route path="/admin" element={<ProteccionRutasAdminTemplate />}>
          <Route path="dashboard" element={<AdminPos />} />
          <Route path="posgrados" element={<AdminPos />} />
          <Route path="pregrados" element={<AdminPos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
