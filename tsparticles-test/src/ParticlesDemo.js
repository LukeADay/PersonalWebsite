// src/ParticlesDemo.js
import React from 'react';
import Particles from "@tsparticles/react";

function ParticlesDemo() {
  const particlesOptions = {
    fullScreen: { enable: true },
    particles: {
      number: { value: 30 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      move: { enable: true, speed: 1 },
    },
  };

  return <Particles options={particlesOptions} />;
}

export default ParticlesDemo;

