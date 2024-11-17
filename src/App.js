import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodingAnimations from './components/CodingAnimations';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import SentimentAnalysis from './components/SentimentAnalysis';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CodingAnimations />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Articles />
      <SentimentAnalysis /> {/* New Sentiment Analysis Section */}
      <Contact />
    </div>
  );
}

export default App;
