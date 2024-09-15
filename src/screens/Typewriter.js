import React, { useState, useEffect } from 'react';

const WordsByGroup = ({ text, displayDuration = 3000, transitionSpeed = 300 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!text) return;

    const words = text.split(' '); // Split text into individual words
    let maxWordsPerGroup = Math.floor(Math.random() * 3) + 5; // Randomize between 5 and 7 words per group

    const displayNextGroup = () => {
      setIsTransitioning(true); // Start fade-out or transition effect

      setTimeout(() => {
        const nextWords = words.slice(currentIndex, currentIndex + maxWordsPerGroup).join(' ');
        setCurrentText(nextWords);
        setCurrentIndex((prevIndex) => prevIndex + maxWordsPerGroup);
        setIsTransitioning(false); // End transition effect
      }, transitionSpeed); // Wait for the fade-out effect before showing new words
    };

    const timer = setInterval(displayNextGroup, displayDuration + transitionSpeed); // Keep text on screen for `displayDuration` then switch

    return () => clearInterval(timer); // Cleanup on unmount
  }, [text, displayDuration, transitionSpeed, currentIndex]);

  return (
    <p
      className={`text-lg text-white transition-opacity duration-${transitionSpeed} ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {currentText}
    </p>
  );
};

export default WordsByGroup;
