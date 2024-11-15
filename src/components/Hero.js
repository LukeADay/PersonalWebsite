import React, { useRef, useEffect } from "react";
import "./Hero.css";
import profilepic from "../assets/profilepic.jpeg";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const mouse = { x: null, y: null, radius: 100 };

    // Create particles
    const createParticles = () => {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 0.5 - 0.5,
          speedY: Math.random() * 0.5 - 0.5,
        });
      }
    };

    // Move particles
    const moveParticles = () => {
      particlesArray.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reverse direction on edge collision
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Interaction with mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const forceX = Math.cos(angle) * force;
          const forceY = Math.sin(angle) * force;

          particle.speedX -= forceX;
          particle.speedY -= forceY;
        }
      });
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      particlesArray.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      drawParticles();
      moveParticles();
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    // Update mouse position
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero">
      <canvas ref={canvasRef}></canvas>
      <div className="hero-content">
        <img src={profilepic} alt="Luke Day" className="profile-pic" />
        <h1>Luke Day</h1>
        <p>Data Scientist | Ph.D. in Applied Statistics</p>
      </div>
    </div>
  );
}

export default Hero;
