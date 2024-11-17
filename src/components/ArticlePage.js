import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Articles.css';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Example articles data
    const articlesData = [
      {
        title: 'First Article',
        excerpt: 'This is a brief summary of the first article.',
        content: '## First Article\n\nThis is the full content of the first article.',
      },
      {
        title: 'Second Article',
        excerpt: 'This is a brief summary of the second article.',
        content: '## Second Article\n\nThis is the full content of the second article.',
      },
      // Add more articles as needed
    ];

    setArticles(articlesData);
  }, []);

  return (
    <div id="articles" className="articles">
      <h2>Articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <ReactMarkdown children={article.content} remarkPlugins={[remarkGfm]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
