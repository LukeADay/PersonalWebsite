// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#articles">Articles</a>
      <a href="https://github.com/LukeADay" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/luke-day-14780585/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="#contact">Contact</a>
      <a href="https://www.buymeacoffee.com/LukeADay" target="_blank" rel="noopener noreferrer" className="buy-me-a-coffee">
        Buy Me a Coffee
      </a>
    </nav>
  );
}

export default Navbar;