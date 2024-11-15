// Hero.js
import React from 'react';
import './Hero.css';
import profilePic from '../assets/profilepic.jpeg'; // Adjust this path as needed

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Luke Day" className="profile-pic" />
        <h1>Luke Day</h1>
        <p>Data Scientist | Ph.D. in Applied Statistics</p>
      </div>
    </section>
  );
}

export default Hero;
