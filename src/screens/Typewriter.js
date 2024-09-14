import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 30, windowSize = 20 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return; // Early return if text is undefined or empty

    let index = 0;
    const timer = setInterval(() => {
      // Show a sliding window of `windowSize` characters
      setDisplayedText(text.slice(index, index + windowSize));
      index += 1;

      // Stop when we've displayed the entire text
      if (index + windowSize > text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [text, speed, windowSize]);

  return <p className="text-lg text-white">{displayedText}</p>; // Tailwind styling for text
};

export default Typewriter;
