import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "./Typewriter";

export default function SubtitlesPage() {
  const text = "Hi there, I'm blank and it's so nice to finally meet you! I hope you're doing well. Hi there, I'm blank and it's so nice to finally meet you! I hope you're doing well.";
  
  const navigate = useNavigate();

  // Function to handle "close" button click
  const handleClose = () => {
    if (window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('resize-window', { width: 800, height: 500 }); // Resize the window
    }
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col relative">

      {/* Close button centered at the top */}
      <div className="absolute top-6 left-0 right-0 flex justify-center">
        <button
          onClick={handleClose}
          className="text-white bg-transparent px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
          aria-label="Close"
          style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
        >
          X
        </button>
      </div>

      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <section className="text-center mt-16 text-white">
          {/* Sliding window typewriter effect */}
          <Typewriter text={text} speed={115} windowSize={50} />
        </section>
      </main>

      <footer className="w-full py-4 bg-gray-900 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Placeholder. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
