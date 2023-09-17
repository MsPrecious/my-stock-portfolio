// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import hamburgerIcon from '../../images/hamburger.png';
import userImage from '../../images/user-img.png';
import logo from '../../images/logo.png';
import { useMenu } from '../../MenuContext';

const Navbar = ({ toggleLeftSidebar }) => { 
  const { isDarkTheme } = useMenu();
  const [isCollapsed, setCollapsed] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const shouldCollapse = window.innerWidth <= 768;
      setCollapsed(shouldCollapse);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar-container ${isCollapsed ? 'collapsed' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="navbar-left">
        <img
          src={hamburgerIcon}
          alt="Hamburger Menu"
          className={`hamburger-icon ${isCollapsed ? 'show' : ''}`}
          onClick={toggleLeftSidebar} 
        />
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <div className="user-greeting">Hello Phoebe</div>
        <div className="user-avatar">
          <img src={userImage} alt="User" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
