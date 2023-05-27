import React, { useState } from "react";
import "../css/nav.css";
import logo from "../assets/logo/TrivSelv_logo_navbar.svg";
import arrowIcon from "../assets/icons/arrow-down.png";


function Nav() {


  return (
    <nav className="navbar" style={{ minHeight: "90px" }}>
      <div className="navbar-logo">
        <img src={logo} alt="Triv selv logo" />
      </div>
      <div className={`navbar-menu`}>
        <ul>
          <li>Booster</li>
          <li>Fag</li>
          <li>Om os</li>
          <li className="navbar-contact">
            Kontakt
            <img className="arrow" src={arrowIcon} alt="Arrow" />
            <div className="contact-dropdown">
              <a href="mailto:contact@example.com">booster@trivselv.dk</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
