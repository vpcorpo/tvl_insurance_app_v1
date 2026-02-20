import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Travel Insurance <span>Corp</span>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/travel-content" className={location.pathname === '/travel-content' ? 'active' : ''}>Travel Content</Link></li>
        <li><Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>Contact Us</Link></li>
        <li><Link to="/emergency-assistance" className={location.pathname === '/emergency-assistance' ? 'active' : ''}>Emergency Assistance</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
