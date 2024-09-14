import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Subtitles from './screens/SubtitlesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subtitles" element={<Subtitles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
