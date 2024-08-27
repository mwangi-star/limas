import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-hotel"></i> Club LIMAS
      </Link>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/rooms" onClick={toggleMenu}>Rooms</Link>
        <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
        <Link to="/review" onClick={toggleMenu}>Review</Link>
       
        <Link to="/reservation" className="btn" onClick={toggleMenu}>Book Now</Link>
      </nav>
      <div id="menu-btn" className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </header>
  );
}

export default Header;
