// src/App.js
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";


export default function Home() {
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (fromLanguage === toLanguage) {
      alert("Please select different languages.");
      // Add your logic here, e.g., navigate to the next page or start translation
    } else if (!fromLanguage || !toLanguage) {
      alert("Please select both languages before continuing.");
    } else {
      console.log(`Translating from ${fromLanguage} to ${toLanguage}`);
      navigate('/subtitles'); // Navigate to the Subtitles page
    }
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "ar", name: "Arabic" },
    { code: "ru", name: "Russian" },
    { code: "pt", name: "Portuguese" },
    { code: "pl", name: "Polish" },
    { code: "it", name: "Italian" },
    { code: "nl", name: "Dutch" },
    { code: "sv", name: "Swedish" },
    { code: "hi", name: "Hindi" },
    { code: "bn", name: "Bengali" },
    { code: "vi", name: "Vietnamese" },
    { code: "tr", name: "Turkish" },
    { code: "he", name: "Hebrew" },
    { code: "uk", name: "Ukrainian" },
    { code: "el", name: "Greek" },

    // Add more languages as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col">
      <header className="w-full p-6">
        <h1 className="text-4xl text-white text-center font-bold">
          Communicate Without Barriers
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <section className="text-center mt-10">
          <p className="text-white text-lg max-w-xl mx-auto">
            Break language barriers with real-time translation. Select your
            languages below to get started.
          </p>
        </section>

        {/* Language Selection Section */}
        <section className="flex flex-col items-center space-y-6 mt-12">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            <div className="flex flex-col items-center">
              <label
                htmlFor="fromLanguage"
                className="block text-white font-semibold mb-2"
              >
                From Language
              </label>
              <select
                id="fromLanguage"
                value={fromLanguage}
                onChange={(e) => setFromLanguage(e.target.value)}
                className="block w-60 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Language</option>
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label
                htmlFor="toLanguage"
                className="block text-white font-semibold mb-2"
              >
                To Language
              </label>
              <select
                id="toLanguage"
                value={toLanguage}
                onChange={(e) => setToLanguage(e.target.value)}
                className="block w-60 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Language</option>
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleContinue}
            className="mt-6 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
          >
            Continue
          </button>
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
