import { useState } from "react";
import ReactSwitch from "react-switch";
import { useThemeContext } from "../../ThemeContext";

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
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
      id="material-switch"
    />
  );
};

export default ThemeToggler;
