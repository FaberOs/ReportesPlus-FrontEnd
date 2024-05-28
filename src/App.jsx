import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider.jsx";

import Sidebar from "./Components/Layout/Sidebar.jsx";
import ConsultPos from "./Pages/ConsultPos";
import ReportePos from "./Pages/ReportePos";
import Login from "./Pages/Login";
import AdminPos from "./Pages/AdminPos";
import Home from "./Pages/Home";
import ConsultMacro from "./Pages/ConsultMacro";
import ReporteMacro from "./Pages/ReporteMacro";
import ProtectedRoute from "./Context/ProtectedRoute.jsx";

const AdminTemplate = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultar"
          element={
            <ProtectedRoute>
              <ConsultPos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultar/reporte-posgrado"
          element={
            <ProtectedRoute>
              <ReportePos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultar-macro"
          element={
            <ProtectedRoute>
              <ConsultMacro />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultar-macro/reporte-macro"
          element={
            <ProtectedRoute>
              <ReporteMacro />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminTemplate />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminPos />} />
          <Route path="posgrados" element={<AdminPos />} />
          <Route path="pregrados" element={<AdminPos />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
