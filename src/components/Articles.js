import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Articles.css';

function Articles() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Load the first article as an example
    import('../articles/first-article.md')
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div id="articles" className="articles">
      <h2>Articles</h2>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default Articles;
