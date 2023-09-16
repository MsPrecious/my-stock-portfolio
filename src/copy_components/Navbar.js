import React, { useState, useEffect } from 'react';
import './Navbar.css';
import hamburgerIcon from '../images/hamburger.png';
import userImage from '../images/user-img.png';
import logo from '../images/logo.png';
import LeftSideBar from './LeftSideBar';

const Navbar = () => {
  const [isCollapsed, setCollapsed] = useState(window.innerWidth <= 768);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!isLeftSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const shouldCollapse = window.innerWidth <= 768;
      setCollapsed(shouldCollapse);

      if (shouldCollapse) {
        setLeftSidebarOpen(false); // Close Left Sidebar when screen is smaller
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="page-container">
      <div className={`navbar-container ${isCollapsed ? 'collapsed' : ''}`}>
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
      {isLeftSidebarOpen && <LeftSideBar toggleLeftSideBar={toggleLeftSidebar} />}
    </div>
  );
};

export default Navbar;
