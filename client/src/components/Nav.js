import React, { useState } from "react";
import "../css/nav.css";
import logo from "../assets/logo/TrivSelv_logo_navbar.svg";
import arrowIcon from "../assets/icons/arrow-down.png";
import hamburger from "../assets/icons/bars-solid.svg";

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" style={{ minHeight: "90px" }}>
      <div className="navbar-logo">
        <img src={logo} alt="Triv selv logo" />
      </div>
      <div className="navbar-toggle">
        <img
          className="hamburger-menu"
          src={hamburger}
          alt="hamburger menu"
          onClick={handleMobileMenuToggle}
        />
        <ul
          className={`hamburger-mobile-list ${
            isMobileMenuOpen ? "open" : ""
          }`}
        >
          <li><a href="#section-content-wrapper">Booster</a></li>
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
      <div className={`navbar-menu`}>
        <ul>
          <li><a href="#section-content-wrapper">Booster</a></li>
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
