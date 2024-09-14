import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return; // Early return if text is undefined or empty

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index += 1;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [text, speed]);

  return <p>{displayedText}</p>;
};

export default Typewriter;
