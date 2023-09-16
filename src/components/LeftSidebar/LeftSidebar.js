// LeftSideBar.js
import React,{useState,useEffect} from 'react';
import './LeftSidebar.css';
import { useMenu } from '../../MenuContext'; 

const LeftSideBar = () => {
  const { selectedItem, handleMenuItemClick, isDarkTheme, toggleTheme } = useMenu(); // Use useMenu hook

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
    <div className={`left-sidebar ${isDarkTheme ? 'dark-theme' : 'light-theme'} ${isCollapsed ? 'collapsed' : ''}`}>
      <div
        className={`menu-item ${selectedItem === 'dashboard' ? 'selected' : ''}`}
        onClick={() => {handleMenuItemClick('dashboard'); console.log("dashboard selected");}} 
      >
        <img src={require('../../images/dashboard.png')} alt="Dashboard Icon" />
        <span>Dashboard</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'sales' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('sales')}
      >
        <img src={require('../../images/sales.png')} alt="Sales Icon" />
        <span>Sales</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'products' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('products')}
      >
        <img src={require('../../images/products.png')} alt="Products Icon" />
        <span>Products</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'stores' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('stores')}
      >
        <img src={require('../../images/stores.png')} alt="Stores Icon" />
        <span>Stores</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'campaign' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('campaign')}
      >
        <img src={require('../../images/campaign.png')} alt="Campaign Icon" />
        <span>Campaign</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'notification' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('notification')}
      >
        <img src={require('../../images/notification.png')} alt="Notifications Icon" />
        <span>Notifications</span>
      </div>
      <div
        className={`menu-item ${selectedItem === 'settings' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('settings')}
      >
        <img src={require('../../images/settings.png')} alt="Settings Icon" />
        <span>Settings</span>
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        <img
          src={require(`../../images/theme.png`)}
          alt="Theme Icon"
        />
        <span>Theme</span>
        <img
          src={require(`../../images/${isDarkTheme ? 'toggle-light.png' : 'toggle-dark.png'}`)}
          alt="Theme Toggle"
          style={{ width: '68px', height: '23px' }}
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
