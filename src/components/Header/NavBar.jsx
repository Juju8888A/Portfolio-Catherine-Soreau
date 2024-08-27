import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const NavBar = () => {
  // gestion de l'état d'ouverture et de fermeture de la navbar en version mobile
  // utilisation du useState pour gérer l'état local du composant
  const [isOpen, setIsOpen] = useState(false);

  // bascule menu ouvert/fermé
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* lorsque l'utilisateur clique sur le bouton hamburger, la navigation s'affiche et inversement */}
      <Hamburger toggled={isOpen} toggle={toggleMenu} />

      <ul className={`navbar-links ${isOpen ? "show" : "hide"}`}>
        <li className="navbar-item">
          <HashLink smooth to="" className="navbar-link">
            Animation 3D
          </HashLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/illustrations" className="navbar-link">
            Illustrations
          </NavLink>
        </li>
        <li className="navbar-item">
          <HashLink smooth to="" className="navbar-link">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
