import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        {/* Empty body for portfolio content */}
      </main>
    </div>
  );
}

export default App;
