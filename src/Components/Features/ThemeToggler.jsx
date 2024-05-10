import { useState } from "react";
import ReactSwitch from "react-switch";
import { useThemeContext } from "../../ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggler = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(contextTheme === "Dark");

  const handleSwitch = (nextChecked) => {
    const newTheme = nextChecked ? "Dark" : "Light";
    setContextTheme(newTheme);
    setChecked(nextChecked);
  };

  return (
    <ReactSwitch
      checked={checked}
      onChange={handleSwitch}
      handleDiameter={28}
      offColor="#d9d9d9"
      onColor="#5056ac"
      offHandleColor="#fff"
      onHandleColor="#ecf0ff"
      height={40}
      width={70}
      borderRadius={25}
      activeBoxShadow="0px 0px 1px 2px #fffc35"
      uncheckedIcon={false}
      checkedIcon={false}
      uncheckedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 18,
            color: "#000",
          }}
        >
          <FontAwesomeIcon icon={faSun} />
        </div>
      }
      checkedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "#000",
            fontSize: 18,
          }}
        >
          <FontAwesomeIcon icon={faMoon} />
        </div>
      }
      className="react-switch"
      id="small-radius-switch"
    />
  );
};

export default ThemeToggler;
