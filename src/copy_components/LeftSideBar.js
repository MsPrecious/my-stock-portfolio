// LeftSideBar.js
import React, { useState } from 'react';
import './LeftSideBar.css';



const LeftSideBar = () => {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`left-sidebar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div
        className={`menu-item ${selectedItem === 'dashboard' ? 'selected' : ''}`}
        onClick={() => setSelectedItem('dashboard')}
      >
        <img src={require('../images/dashboard.png')} alt="Dashboard Icon" />
        <span>Dashboard</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'sales' ? 'selected' : ''}`}
        onClick={() => setSelectedItem('sales')}
      >
        <img src={require('../images/sales.png')} alt="Sales Icon" />
        <span>Sales</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'products' ? 'selected' : ''}`}
        onClick={() => setSelectedItem('products')}
      >
        <img src={require('../images/products.png')} alt="Products Icon" />
        <span>Products</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'stores' ? 'selected' : ''}`}
        onClick={() => setSelectedItem('stores')}
      >
        <img src={require('../images/stores.png')} alt="Stores Icon" />
        <span>Stores</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'campaign' ? 'selected' : ''}`}
        onClick={() => setSelectedItem('campaign')}
      >
        <img src={require('../images/campaign.png')} alt="Campaign Icon" />
        <span>Campaign</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'notification' ? 'selected' : ''}`}
        onClick={() => setSelectedItem('notification')}
      >
        <img src={require('../images/notification.png')} alt="Notifications Icon" />
        <span>Notifications</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'settings' ? 'selected' : ''}`}
        onClick={() => setSelectedItem('settings')}
      >
        <img src={require('../images/settings.png')} alt="Settings Icon" />
        <span>Settings</span>
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        <img
          src={require(`../images/theme.png`)}
          alt="Theme Icon"
        />
        <span>Theme</span>
        <img
          src={require(`../images/${isDarkTheme ? 'toggle-light.png' : 'toggle-dark.png'}`)}
          alt="Theme Toggle"
          style={{ width: '68px', height: '23px' }}
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
