import React, { useState } from 'react';
import './css/style.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <nav className={'navbar'}>
      <div className={'logo'}>Still</div>
      <button onClick={toggleDarkMode} className={'toggleBtn'}>
        {darkMode ? '🌙' : '☀️'}
      </button>
   
      <ul className={`${'navLinks'} ${menuOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
         <div className={'hamburger'} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
