import React from 'react';
import './css/index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="foot">
        <p className="p1">
          © {new Date().getFullYear()} <strong>KENDA</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}       
export default Footer;