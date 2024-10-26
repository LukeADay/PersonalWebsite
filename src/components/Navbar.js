import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <nav className="navbar">
      <h1>Luke Day</h1>
      <ul>
        {/* If on main page, use ScrollLink. Otherwise, use RouterLink to navigate back to main page */}
        <li>
          {isMainPage ? (
            <ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink>
          ) : (
            <RouterLink to="/">Home</RouterLink>
          )}
        </li>
        <li>
          {isMainPage ? (
            <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
          ) : (
            <RouterLink to="/#about">About</RouterLink>
          )}
        </li>
        <li>
          {isMainPage ? (
            <ScrollLink to="experience" smooth={true} duration={500}>Experience</ScrollLink>
          ) : (
            <RouterLink to="/#experience">Experience</RouterLink>
          )}
        </li>
        <li>
          {isMainPage ? (
            <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
          ) : (
            <RouterLink to="/#projects">Projects</RouterLink>
          )}
        </li>
        <li>
          <RouterLink to="/articles">Articles</RouterLink>
        </li>
        <li>
          {isMainPage ? (
            <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          ) : (
            <RouterLink to="/#contact">Contact</RouterLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
