// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../../assets/expression_logo.jpg';
import logo from '../../assets/expression_without_bg_logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
