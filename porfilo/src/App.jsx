import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import './App.css'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'light' : 'dark';
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
         <main>
        <Routes>

          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
