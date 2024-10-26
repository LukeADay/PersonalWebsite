import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlesList.css';

function ArticlesList() {
  const articles = [
    { id: 'first-article', title: 'My First Article', snippet: 'Welcome to my first article! Here, I’ll share insights on data science, machine learning, and more.' },
    { id: 'second-article', title: 'Exploring Machine Learning', snippet: 'Let’s dive into the basics of machine learning and how it’s transforming industries.' }
  ];

  return (
    <div className="articles-list">
      <h2>Articles</h2>
      {articles.map(article => (
        <div key={article.id} className="article-snippet">
          <h3>{article.title}</h3>
          <p>{article.snippet}</p>
          <Link to={`/article/${article.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
