// src/ParticlesVanilla.js
import React, { useEffect } from 'react';

function ParticlesVanilla() {
  useEffect(() => {
    // Vanilla JavaScript initialization
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tsparticles@latest/tsparticles.bundle.min.js";
    script.async = true;
    script.onload = () => {
      // After script loads, initialize particles
      if (window.tsParticles) {
        console.log("Initializing particles with Vanilla JS");
        window.tsParticles.load("tsparticles", {
          fullScreen: { enable: true },
          particles: {
            number: { value: 30 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            move: { enable: true, speed: 1 },
          },
        }).then(() => {
          console.log("Particles initialized with Vanilla JS");
        });
      }
    };

    document.body.appendChild(script); // Append script to load particles library

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return <div id="tsparticles" style={{ width: "100%", height: "100vh", border: "2px solid green" }} />;
}

export default ParticlesVanilla;

