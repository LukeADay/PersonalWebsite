import React, { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <canvas className="particle-canvas"></canvas>
      <div className="hero-content">
        <img src={profilepic} alt="Luke Day" className="profile-pic" />
        <h1>Luke Day</h1>
        <p>Data Scientist | Ph.D. in Applied Statistics</p>
        <TerminalAnimation />
      </div>
    </div>
  );
}

function TerminalAnimation() {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const lines = [
    "Welcome to my personal website!",
    "I'm a Data Scientist specializing in machine learning.",
    "const lukeDay = { skills: ['Python', 'R', 'SQL', 'ML'] };",
    "Stay awhile and explore my projects!",
  ];

  useEffect(() => {
    let timeout;

    const typeLine = () => {
      const currentLine = lines[lineIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      } else {
        setDisplayedText((prev) => currentLine.slice(0, prev.length + 1));
        if (displayedText === currentLine) {
          setIsDeleting(true);
          timeout = setTimeout(typeLine, 1500); // Pause before deleting
          return;
        }
      }
      timeout = setTimeout(typeLine, isDeleting ? 50 : 100);
    };

    timeout = setTimeout(typeLine, 500);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, lineIndex]);

  return (
    <div className="terminal">
      <div className="terminal-content">
        <span className="terminal-line">{displayedText}</span>
        <span className="blinking-cursor">|</span>
      </div>
    </div>
  );
}

export default Hero;
