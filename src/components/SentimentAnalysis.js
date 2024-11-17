import React, { useState } from 'react';

function SentimentAnalysis() {
    const [inputText, setInputText] = useState(''); // Ensure inputText is correctly initialized
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://imdb-sentiment-analysis-api.onrender.com/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText })
            });
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setResult(data);  // Update result state
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2 style={{ color: 'limegreen' }}>Sentiment Analysis</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    type="text"
                    value={inputText} // Bind the input value to state
                    onChange={(e) => setInputText(e.target.value)} // Update state on input change
                    placeholder="Enter a movie review"
                    style={{ padding: '10px', width: '300px', marginRight: '10px' }}
                />
                <button type="submit" style={{ padding: '10px 20px' }}>Analyze</button>
            </form>
            {result && (
                <div style={{ marginTop: '20px', paddingBottom: '20px' }}>
                    {/* Display the result once it is available */}
                    <p><strong>Score:</strong> {result.score}</p>
                    <p><strong>Sentiment:</strong> {result.label}</p>
                </div>
            )}
        </div>
    );
}

export default SentimentAnalysis;
