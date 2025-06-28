import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import career from './components/career';
import './App.css'; 
import { Intro, Footer, Career, NotFound } from './components/imports.js';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'light' : 'dark';
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
       <Intro />
      <Career />
      <Footer />
     
    </div>
  );
}

export default App;
