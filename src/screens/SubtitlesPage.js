import React from "react";
import Typewriter from "./Typewriter";

export default function SubtitlesPage() {
  const text = "Hi there, I'm blank and it's so nice to finally meet you! I hope you're doing well. HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col">
      <header className="w-full p-6">
        <h1 className="text-4xl text-white text-center font-bold mt-10">
          Communicate Without Barriers
        </h1>
        
      </header>

      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <section className="text-center mb-60 text-white">
        <Typewriter text={text} speed={50} />
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
