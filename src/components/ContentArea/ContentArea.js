// ContentArea.js
import React from 'react';
import './ContentArea.css';

// Import content components for each menu item
import DashboardContent from '../DashboardContent/DashboardContent'; // Import actual content components
// Import other content components...

function ContentArea({ selectedMenuItem }) {
  // Determine which content component to render based on selectedMenuItem
  let contentToRender;

  switch (selectedMenuItem) {
    case 'dashboard':
      contentToRender = <DashboardContent />;
      break;
    // Add cases for other menu items

    default:
      // Default content when no menu item is selected
      contentToRender = <p>Please select a menu item.</p>;
      break;
  }

  return (
    <div className="content-area">
      {contentToRender}
    </div>
  );
}

export default ContentArea;
