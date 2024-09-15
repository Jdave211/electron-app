import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "./Typewriter";

export default function SubtitlesPage() {
  const navigate = useNavigate();
  const [text, setText] = useState('...');

  const runPython = async () => {
    await window.electronAPI.runPythonScript();
  }

  useEffect(() => {
    runPython();
    window.electronAPI.onGotNewText((value) => {
      setText(value);
    })
  }, [])

  // Function to handle "close" button click
  const handleClose = () => {
    if (window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('resize-window', { width: 800, height: 500 }); // Resize the window
    }
    window.electronAPI.killChild();
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center relative">

      {/* Close button in the top-right corner */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white bg-transparent px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
        aria-label="Close"
        style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
      >
        x
      </button>

      {/* Main content (Typewriter text) centered */}
      <main className="flex items-center justify-center">
        <section className="text-white text-center">
          <Typewriter text={text} speed={115} windowSize={50} />
        </section>
      </main>
      
    </div>
  );
}
