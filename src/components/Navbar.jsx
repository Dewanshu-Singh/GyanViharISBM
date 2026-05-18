import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-container fade-in-up">
      <div className="navbar-logo">
        <img src="/sgvu-logo.png" alt="Suresh Gyan Vihar University Logo" className="logo-image" />
      </div>
      
      <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
        <a href="#programs" className="nav-link" onClick={toggleMenu}>Programs</a>
        <a href="#partners" className="nav-link" onClick={toggleMenu}>Partners</a>
        <a href="#campus-life" className="nav-link" onClick={toggleMenu}>Campus Life</a>
        <a href="#alumni" className="nav-link" onClick={toggleMenu}>Alumni</a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        <a href="#admissions" className="navbar-btn mobile-only" onClick={toggleMenu} style={{ textDecoration: 'none', textAlign: 'center' }}>Apply Now</a>
      </nav>
      
      <div className="navbar-actions">
        <a href="#admissions" className="navbar-btn desktop-only" style={{ textDecoration: 'none' }}>Apply Now</a>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
