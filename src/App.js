import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodingAnimations from './components/CodingAnimations';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import SentimentAnalysis from './components/SentimentAnalysis';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CodingAnimations />
      <About />
      <Publications />
      <Experience />
      <Skills />
      <Projects />
      <SentimentAnalysis />
      <Contact />
    </div>
  );
}

export default App;
