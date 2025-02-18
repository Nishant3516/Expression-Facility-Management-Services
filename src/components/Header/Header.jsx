import "./Header.css";
import logo from "../../assets/expression_without_bg_logo_cropped.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState("Home");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    // setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownOpen(true);
  };

  const closeMenu = (id) => {
    setOptionSelected(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="headerDiv">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li
              className={`nav-item ${
                optionSelected === "Home" ? "active" : ""
              }`}
              id="Home"
            >
              <Link to="/" onClick={() => closeMenu("Home")}>
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                optionSelected === "About" ? "active" : ""
              }`}
              id="About"
            >
              <Link to="/about" onClick={() => closeMenu("About")}>
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                optionSelected === "Services" ? "active" : ""
              }`}
              id="Services"
              onClick={toggleDropdown}
            >
              <a href="#">Services</a>
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="service/1" onClick={() => closeMenu("Services")}>
                      Housekeeping Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/2" onClick={() => closeMenu("Services")}>
                      Security Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/3" onClick={() => closeMenu("Services")}>
                      Pest Control Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/4" onClick={() => closeMenu("Services")}>
                      Linen & Laundry Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/5" onClick={() => closeMenu("Services")}>
                      Bio Medical Waste
                    </Link>
                  </li>
                  <li>
                    <Link to="service/6" onClick={() => closeMenu("Services")}>
                      Ward Boy (GDA) Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/7" onClick={() => closeMenu("Services")}>
                      Deep Cleaning Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`nav-item ${
                optionSelected === "Careers" ? "active" : ""
              }`}
              id="Careers"
            >
              <Link to="/careers" onClick={() => closeMenu("Careers")}>
                Careers
              </Link>
            </li>
            <li
              className={`nav-item ${
                optionSelected === "Contact" ? "active" : ""
              }`}
              id="Contact"
            >
              <Link to="/contact" onClick={() => closeMenu("Contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </header>
    </div>
  );
}

export default App;
