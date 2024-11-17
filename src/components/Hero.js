import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCoffee } from 'react-icons/fa';
import './Hero.css';
import profilepic from '../assets/profilepic.jpeg';

function Hero() {
  return (
  <section id="hero" className="hero">
      <div className="hero-banner"></div>
      <div className="hero-content">
        <img
          src={profilepic}
          alt="Profile"
          className="profile-image"
        />
        <h1>Luke Day</h1>
        <p>Data Scientist | Machine Learning Engineer | Ph.D. in Applied Statistics</p>
        <div className="social-icons">
          <a href="mailto:lukeday_10@hotmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/LukeADay" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/luke-day-14780585/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.buymeacoffee.com/LukeADay" target="_blank" rel="noopener noreferrer">
            <FaCoffee />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
