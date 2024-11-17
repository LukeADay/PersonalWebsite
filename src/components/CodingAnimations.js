import React, { useState, useEffect } from 'react';
import './CodingAnimations.css';

function CodingAnimations() {
  const [codeText, setCodeText] = useState('');
  const [terminalText, setTerminalText] = useState('');

  const codeSnippet = `{
  "name": "Luke Day",
  "skills": ["Python", "R", "SQL", "Machine Learning"],
  "experience": "ETL"
}`;

  const terminalMessage = "I'm a Data Scientist specializing in predictive analytics, machine learning, and AI.";

  useEffect(() => {
    let codeIndex = 0;
    let terminalIndex = 0;

    const codeInterval = setInterval(() => {
      if (codeIndex < codeSnippet.length) {
        setCodeText((prev) => prev + codeSnippet[codeIndex]);
        codeIndex++;
      } else {
        clearInterval(codeInterval);
      }
    }, 50);

    const terminalInterval = setInterval(() => {
      if (terminalIndex < terminalMessage.length) {
        setTerminalText((prev) => prev + terminalMessage[terminalIndex]);
        terminalIndex++;
      } else {
        // Append a final character to signal the end if needed
        setTerminalText((prev) => prev + ' ►');
        clearInterval(terminalInterval);
      }
    }, 50);

    return () => {
      clearInterval(codeInterval);
      clearInterval(terminalInterval);
    };
  }, []);

  return (
    <section id="coding-animations" className="coding-animations">
      <h2>Coding Animations</h2>
      <div className="coding-container">
        {codeText && (
          <div className="code-box">
            <pre>{codeText}</pre>
          </div>
        )}
        {terminalText && (
          <div className="terminal-box">
            <pre>{terminalText}</pre>
          </div>
        )}
      </div>
    </section>
  );
}

export default CodingAnimations;
