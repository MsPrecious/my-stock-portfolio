// App.js

import React, { useState } from 'react';
import './App.css'; // You can import a global CSS file for overall styling

import Navbar from './components/Navbar/Navbar';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ContentArea from './components/ContentArea/ContentArea';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemSelect = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  return (
    <div className="app">
      <Navbar onToggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div className="main-content">
          <LeftSidebar onSelectMenuItem={handleMenuItemSelect} />
          <ContentArea selectedMenuItem={selectedMenuItem} />
        </div>
      )}
    </div>
  );
}

export default App;
