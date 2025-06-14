import React, { useState } from 'react';
import './css/style.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <nav className={'navbar'}>
      <div className={'logo'}>MyPortfolio</div>
      <button onClick={toggleDarkMode} className={'toggleBtn'}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      <div className={'hamburger'} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`${'navLinks'} ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
