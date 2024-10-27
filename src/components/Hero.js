import React from 'react';
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import './Hero.css';

function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="hero" className="hero">
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Particles contained within hero section
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.1, random: true },
            size: { value: 2, random: true },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          background: {
            color: "#000000",
          },
        }}
      />
      <div className="hero-content">
        <h1>Luke Day</h1>
        <p>Data Scientist | Ph.D. in Applied Statistics</p>
      </div>
    </section>
  );
}

export default Hero;
