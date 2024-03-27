import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { House, Search, Building, Book, Gear } from "react-bootstrap-icons";

const Sidebar = () => {
  const iconStyle = { width: "50px", height: "50px", color: "black" };
  const menuItemStyle = {
    backgroundColor: "#D9D9D9",
    borderRadius: "10px 0 0 10px",
    padding: "10px 20px",
    margin: "5px 0",
  };

  return (
    <div
      style={{ width: "120px", height: "980px", backgroundColor: "#FFFFFF" }}
      className="d-flex flex-column align-items-center"
    >
      <div style={{ ...menuItemStyle, marginTop: "25px" }}>
        <House style={iconStyle} />
      </div>
      <div style={menuItemStyle}>
        <Search style={iconStyle} />
      </div>
      <div style={menuItemStyle}>
        <Building style={iconStyle} />
      </div>
      <div style={menuItemStyle}>
        <Book style={iconStyle} />
      </div>
      <div
        style={{ ...menuItemStyle, marginBottom: "25px", marginTop: "auto" }}
      >
        <Gear style={iconStyle} />
      </div>
    </div>
  );
};

export default Sidebar;
