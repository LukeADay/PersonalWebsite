import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ArticlesList />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
