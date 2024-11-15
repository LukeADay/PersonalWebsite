// src/DirectParticles.js
import React, { useEffect } from 'react';
import { tsParticles } from "tsparticles";

function DirectParticles() {
  useEffect(() => {
    console.log("DirectParticles component loaded");

    tsParticles.load("tsparticles", {
      fullScreen: { enable: true },
      particles: {
        number: { value: 30 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        move: { enable: true, speed: 1 },
      },
    }).then(() => {
      console.log("Particles initialized successfully");
    }).catch((error) => {
      console.error("Particles failed to initialize", error);
    });
  }, []);

  return <div id="tsparticles" style={{ width: "100%", height: "100vh", border: "2px solid red" }} />;
}

export default DirectParticles;

