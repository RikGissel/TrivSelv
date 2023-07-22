import React, { useState, useEffect, useRef } from "react";
import "../css/nav.css";
import logo from "../assets/logo/TrivSelv_logo_navbar.svg";
import arrowIcon from "../assets/icons/arrow-down.png";
import hamburger from "../assets/icons/bars-solid.svg";

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuRef]);

  const handleMobileMenuToggle = (event) => {
    event.stopPropagation(); // Stop event propagation
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" style={{ minHeight: "90px" }}>
      <div className="navbar-logo">
        <a href="#top">
          <img src={logo} alt="Triv selv logo" />
        </a>
      </div>
      <div className="navbar-toggle">
        <img
          className="hamburger-menu"
          src={hamburger}
          alt="hamburger menu"
          onClick={handleMobileMenuToggle}
        />
        <ul
          ref={mobileMenuRef}
          className={`hamburger-mobile-list ${isMobileMenuOpen ? "open" : ""}`}
          onClick={(event) => event.stopPropagation()} // Stop event propagation on the menu
        >
          <li><a href="#section-content-wrapper">Booster</a></li>
          <li><a href="#lessons-container-main">Fag</a></li>
          <li><a href="#about"></a>Om os</li>
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
          <li><a href="#lessons-container-main">Fag</a></li>
          <li><a href="#about">Om os</a></li>
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
