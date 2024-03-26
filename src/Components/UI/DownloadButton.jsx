//import React from "react";

import DownloadIcon from "../../Assets/download.svg";

const DownloadButton = () => {
  const buttonStyle = {
    background: "rgba(0, 0, 102, 1)", // Dark blue background color from Figma properties
    borderColor: "rgba(0, 0, 102, 1)", // Dark blue border color
    borderRadius: "25px", // Corner radius from Figma properties
    padding: "15px 20px", // Padding from Figma properties
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF", // Text color (white)
    fontWeight: "600", // Semi-bold
    fontSize: "12px", // Font size from Figma properties
    textDecoration: "none",
    cursor: "pointer",
    borderWidth: "2px",
    borderStyle: "solid",
    width: "200px", // Width from Figma properties
    height: "40px", // Height from Figma properties
  };

  const iconStyle = {
    marginLeft: "10px",
    width: "20px",
    height: "20px",
  };

  return (
    <button style={buttonStyle} className="btn">
      DESCARGAR ARCHIVO
      <img src={DownloadIcon} alt="Download" style={iconStyle} />
    </button>
  );
};

export default DownloadButton;
