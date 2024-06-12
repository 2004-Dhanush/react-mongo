import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2>Guidelines for Creating Quotes</h2>
      <div className="feature-section">
        <h3>Clarity and Brevity</h3>
        <ul>
          <li><strong>Concise:</strong> Use as few words as possible to convey the message.</li>
          <li><strong>Clear:</strong> Avoid complex language or jargon that might confuse the reader.</li>
        </ul>
      </div>
      <div className="feature-section">
        <h3>Emotion and Impact</h3>
        <ul>
          <li><strong>Emotionally Resonant:</strong> Tap into universal emotions like love, fear, joy, or sorrow.</li>
          <li><strong>Impactful:</strong> Aim to leave a lasting impression on the reader.</li>
        </ul>
      </div>
      <div className="feature-section">
        <h3>Universality</h3>
        <ul>
          <li><strong>Relatable:</strong> Ensure the quote speaks to a broad audience.</li>
          <li><strong>Timeless:</strong> Craft quotes that remain relevant across different times and cultures.</li>
        </ul>
      </div>
      <div className="feature-section">
        <h3>Originality</h3>
        <ul>
          <li><strong>Unique Perspective:</strong> Offer a fresh take or a unique perspective on a common theme.</li>
          <li><strong>Authentic Voice:</strong> Reflect your authentic voice or the voice of the character (if creating a fictional quote).</li>
        </ul>
      </div>
      <div className="feature-section">
        <h3>Imagery and Metaphor</h3>
        <ul>
          <li><strong>Vivid Imagery:</strong> Use descriptive language to paint a picture in the reader's mind.</li>
          <li><strong>Metaphor and Simile:</strong> Employ metaphors or similes to draw connections and enhance meaning.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
