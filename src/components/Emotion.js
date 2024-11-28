import React, { useState } from 'react';
import './Emotion.css'; // Optional for styling, you can create this file for custom styles

function EmotionModel() {
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmotion(null);

    try {
      const response = await fetch('https://9fuctupzoj.execute-api.eu-west-2.amazonaws.com/prod/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        setEmotion(data.emotion);
      } else {
        setEmotion('Error: Could not fetch emotion');
      }
    } catch (error) {
      setEmotion('Error: Could not connect to API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="emotion-model">
      <h2>Emotion Detection Model</h2>
      <p>
        This section allows you to interact with an emotion detection model fine-tuned on the Emotion dataset. Enter some text to analyze the emotion.
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
        ></textarea>
        <button type="submit" disabled={!text || loading}>
          {loading ? 'Analyzing...' : 'Analyze Emotion'}
        </button>
      </form>
      {loading && <div className="loading-icon">🔄 Loading...</div>}
      {emotion && <div className="emotion-result">Emotion: {emotion}</div>}
    </section>
  );
}

export default EmotionModel;
