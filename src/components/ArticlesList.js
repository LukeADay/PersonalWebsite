// src/components/ArticlesList.js
import React from 'react';
import './ArticlesList.css';

function ArticlesList() {
  return (
    <section id="articles" className="articles">
      <h2>Articles</h2>
      <div className="articles-grid">
        <div className="article-card">
          <h3>My First Article</h3>
          <p>Welcome to my first article! Here, I’ll share insights on data science, machine learning, and more.</p>
          <a href="#article-1">Read More</a>
        </div>
        <div className="article-card">
          <h3>Exploring Machine Learning</h3>
          <p>Let’s dive into the basics of machine learning and how it’s transforming industries.</p>
          <a href="#article-2">Read More</a>
        </div>
        {/* Add more articles as needed */}
      </div>
    </section>
  );
}

export default ArticlesList;
