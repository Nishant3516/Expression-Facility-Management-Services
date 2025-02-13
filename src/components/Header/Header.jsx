import "./Header.css";
import logo from "../../assets/expression_without_bg_logo_cropped.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    // setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="headerDiv">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item" onClick={toggleDropdown}>
              <a href="#">Services</a>
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="service/1" onClick={closeMenu}>
                      Housekeeping Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/2" onClick={closeMenu}>
                      Security Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/3" onClick={closeMenu}>
                      Pest Control Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/4" onClick={closeMenu}>
                      Linen & Laundry Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/5" onClick={closeMenu}>
                      Bio Medical Waste
                    </Link>
                  </li>
                  <li>
                    <Link to="service/6" onClick={closeMenu}>
                      Ward Boy (GDA) Services
                    </Link>
                  </li>
                  <li>
                    <Link to="service/7" onClick={closeMenu}>
                      Deep Cleaning Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/careers" onClick={closeMenu}>
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={closeMenu}>
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
