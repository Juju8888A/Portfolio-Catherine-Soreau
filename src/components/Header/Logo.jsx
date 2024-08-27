import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_catherine_soreau.webp";

const Logo = () => {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img src={logo} alt="logo du portfolio de catherine soreau" />
      </NavLink>
    </div>
  );
};

export default Logo;
