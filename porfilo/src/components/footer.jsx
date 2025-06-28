import React from 'react';
import './css/index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="foot">
        <p className="p1">
          © {new Date().getFullYear()} Porfilo. All rights reserved.
        </p>
        <p className="tp2">
          Made with ❤️ by the Porfilo Team
        </p>
      </div>
    </footer>
  );
}       
export default Footer;