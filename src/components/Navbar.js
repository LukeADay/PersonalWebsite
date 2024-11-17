import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">MyPortfolio</a>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#hero" className="nav-links" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-links" onClick={toggleMenu}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#articles" className="nav-links" onClick={toggleMenu}>Articles</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
