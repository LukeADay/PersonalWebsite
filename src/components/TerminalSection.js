// src/components/TerminalSection.js
import React, { useEffect, useRef } from "react";
import "./TerminalSection.css";

function TerminalAnimation() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const text = "I'm a Data Scientist specializing in predictive analytics, machine learning, and ETL pipelines.";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        terminalRef.current.innerText += text[index];
        index++;
        setTimeout(type, 100);
      }
    };

    terminalRef.current.innerText = "";
    type();
  }, []);

  return (
    <div className="terminal">
      <span ref={terminalRef}></span>
    </div>
  );
}

function JSONDisplay() {
  const jsonContent = `{
  "name": "Luke Day",
  "skills": [
    "Python",
    "R",
    "SQL",
    "Machine Learning"
  ],
  "experience": "ETL"
}`;

  return (
    <div className="json-display">
      <pre>{jsonContent}</pre>
    </div>
  );
}

function TerminalSection() {
  return (
    <section className="terminal-section">
      <h2>Coding Animations</h2>
      <div className="terminal-container">
        <TerminalAnimation />
        <JSONDisplay />
      </div>
    </section>
  );
}

export default TerminalSection;
