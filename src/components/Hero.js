import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCoffee } from 'react-icons/fa';
import './Hero.css'; // Assuming you have a separate CSS for styling
import profilepic from '../assets/profilepic.jpeg';


function Hero() {
  return (
      <section className="hero">
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
                      <FaEnvelope size={30} />
                  </a>
                  <a href="https://github.com/LukeADay" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/luke-day-14780585/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} />
                  </a>
                  <a href="https://www.buymeacoffee.com/LukeADay" target="_blank" rel="noopener noreferrer">
                      <FaCoffee size={30} />
                  </a>
              </div>
          </div>
      </section>
  );
}

export default Hero;
