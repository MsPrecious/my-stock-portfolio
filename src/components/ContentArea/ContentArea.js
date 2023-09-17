import React from 'react';
import './ContentArea.css';
import { useMenu } from '../../MenuContext'; 
import DashboardContent from '../DashboardContent/DashboardContent';

function ContentArea() {
  const { selectedMenuItem, isDarkTheme } = useMenu();

  const contentStyles = {
    backgroundColor: isDarkTheme ? '#142d4c' : '#f0f0f0',
    color: isDarkTheme ? 'white' : 'black',
    border: isDarkTheme ? '1px solid #30475e' : '1px solid #e0e0e0',
    padding: '20px',
    flexGrow: 1,
    overflowY: 'auto',
  };

  let contentToRender;

  switch (selectedMenuItem) {
    case 'dashboard':
      contentToRender = <DashboardContent />;
      break;

    default:
      contentToRender = null;
      break;
  }

  return <div style={contentStyles}>{contentToRender}</div>;
}

export default ContentArea;
