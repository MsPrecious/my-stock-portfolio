// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ContentArea from './components/ContentArea/ContentArea';
import { MenuProvider } from './MenuContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log('isSidebaropned:',isSidebarOpen);
  return (
    <MenuProvider>
      <div className="app">
        <Navbar toggleLeftSidebar={toggleSidebar} /> {/* Pass the toggleSidebar function */}
        {isSidebarOpen && (
          <div className="main-content">
            <LeftSidebar />
            <ContentArea />
          </div>
        )}
      </div>
    </MenuProvider>
  );
}

export default App;
