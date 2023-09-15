// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import hamburgerIcon from '../images/hamburger.png';
import userImage from '../images/user-img.png';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isCollapsed, setCollapsed] = useState(window.innerWidth <= 768);

  const toggleNavbar = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar-container ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Hamburger icon */}
      <div className="navbar-left">
        <img
          src={hamburgerIcon}
          alt="Hamburger Menu"
          className={`hamburger-icon ${isCollapsed ? 'show' : ''}`}
          onClick={toggleNavbar}
        />
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="logo"
      />
    </div>
      {/* User info */}
      <div className="navbar-right">
        <div className="user-greeting">
          Hello Phoebe
        </div>
        <div className="user-avatar">
          <img src={userImage} alt="User" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
