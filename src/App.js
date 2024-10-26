import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ArticlesList from './components/ArticlesList'; // or replace with Articles
import ArticlePage from './components/ArticlePage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <ArticlesList /> {/* You could also put this in a separate route */}
              <Contact />
            </>
          } />

          {/* Articles Route */}
          <Route path="/articles" element={<ArticlesList />} />

          {/* Individual Article Page Route */}
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
