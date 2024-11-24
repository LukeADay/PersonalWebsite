import React from 'react';
import './Projects.css';
import decisiontree from '../assets/decisiontree.jpg';
import tech from '../assets/tech.jpg';
import payments from '../assets/payments.jpg';
import computer from '../assets/computer.jpg';

function Projects() {
  const projectData = [
    {
      title: 'DecisionTree-to-Sankey',
      description: 'A Python library that visualizes decision trees as Sankey diagrams.',
      link: 'https://github.com/LukeADay/DecisionTree-to-Sankey',
      image: decisiontree,
      badgeUrl: 'https://pepy.tech/project/decisiontree-to-sankey',
      badgeImage: 'https://static.pepy.tech/badge/decisiontree-to-sankey'
    },
    {
      title: 'IMDB-Sentiment-Analysis-API',
      description: 'Building and deploying a TensorFlow LSTM with Docker, Kubernetes, and Render.',
      link: 'https://github.com/LukeADay/IMDB-Sentiment-Analysis-API',
      image: tech,
    },
    {
      title: 'Kaggle Child Mind Institute — Problematic Internet Use',
      description: 'A Kaggle competition to predict children\'s problematic internet usage.',
      link: 'https://github.com/LukeADay/CMI-Kaggle-Competition',
      image: computer,
    },
    {
      title: 'Payments',
      description: 'Predicting successful payments.',
      link: 'https://github.com/LukeADay/Payments',
      image: payments,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Display the downloads badge only for the 'DecisionTree-to-Sankey' project */}
              {project.badgeImage && (
                <div className="badge-container">
                  <a href={project.badgeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={project.badgeImage} alt="Downloads badge" />
                  </a>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
