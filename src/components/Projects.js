import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>DecisionTree-to-Sankey</h3>
          <p>A Python library that visualizes decision trees as Sankey diagrams. Available on GitHub and PyPI.</p>
        </li>
        <li>
          <h3>Kaggle Competitions</h3>
          <p>Participated in Kaggle competitions focused on predicting outcomes and optimizing complex metrics. More to come on this...</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
