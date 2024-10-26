import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ArticlePage.css';

function ArticlePage() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Dynamically import the markdown file based on the article ID
    import(`../articles/${id}.md`)
      .then((module) => fetch(module.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading markdown file:', error));
  }, [id]);

  return (
    <div className="article-page">
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default ArticlePage;
