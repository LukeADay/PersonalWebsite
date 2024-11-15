// About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I am a Data Scientist with a Ph.D. in Applied Statistics, specializing in predictive analytics, 
        survival modeling, and Bayesian methods. With 5+ years of experience in Python and R, I develop machine learning models 
        and end-to-end ETL pipelines that drive business innovation.
      </p>
    </motion.section>
  );
}

export default About;
