import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <HashLink smooth to="">
            Animation 3D
          </HashLink>
        </li>
        <li>
          <NavLink smooth to="/illustrations">
            Illustrations
          </NavLink>
        </li>
        <li>
          <HashLink smooth to="">
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
