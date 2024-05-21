import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../ThemeContext.jsx";

import TableTabs from "../Components/Layout/TableTabs.jsx";

function AdminPos() {
  const location = useLocation();
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  useEffect(() => {
    document.body.className = isDarkTheme ? "Dark" : "Light";
  }, [location, isDarkTheme]);

  return (
    <div>
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <TableTabs />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPos;
