import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/expression_without_bg_logo.png"; // Your logo

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="mainHeaderDiv">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav>
          <ul className={`nav-list ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li
              className="services-menu"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onClick={toggleDropdown}
            >
              <span>Services</span>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                onMouseLeave={closeDropdown}
              >
                <li>
                  <Link to="/service/1">Housekeeping</Link>
                </li>
                <li>
                  <Link to="/service/2security">Security</Link>
                </li>
                <li>
                  <Link to="/service/3">Pest Control</Link>
                </li>
                <li>
                  <Link to="/service/4">Linen & Laundry</Link>
                </li>
                <li>
                  <Link to="/service/5">Bio Medical Waste</Link>
                </li>
                <li>
                  <Link to="/service/6">Ward Boy Services</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
