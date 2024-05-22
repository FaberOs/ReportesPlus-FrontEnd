import PropTypes from "prop-types";
import "../../Styles/Layout/ConsultForm.css";
import { useThemeContext } from "../../ThemeContext.jsx";

const ConsultForm = ({ imagen, titulo, input1, input2, boton, boton2 }) => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  return (
    <div
      className={`container-fluid d-flex align-items-center justify-content-center mt-5 mb-5 ${
        isDarkTheme ? "dark-theme" : ""
      }`}
    >
      <div className="row">
        <div className="col-12">
          <div
            className={`consultForm-container p-3 ${
              isDarkTheme ? "dark-theme" : ""
            }`}
          >
            <div className="row">
              <div className="col-md-6">
                <img
                  src={imagen}
                  alt="Imagen"
                  className="consultForm-imagen img-fluid"
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="text-center mt-4">
                  <h2
                    className={`consultForm-titulo ${
                      isDarkTheme ? "dark-text" : ""
                    }`}
                  >
                    {titulo}
                  </h2>
                </div>
                <div className="mb-1">{input1}</div>
                <div className="mb-1">{input2}</div>
                <div className="text-center mb-4 d-flex justify-content-center gap-2">
                  {boton}
                  {boton2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConsultForm.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  input1: PropTypes.element.isRequired,
  input2: PropTypes.element.isRequired,
  boton: PropTypes.element.isRequired,
  boton2: PropTypes.element.isRequired,
};

export default ConsultForm;
