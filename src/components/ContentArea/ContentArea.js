import React from 'react';
import './ContentArea.css';
import { useMenu } from '../../MenuContext'; // Import useMenu hook
import DashboardContent from '../DashboardContent/DashboardContent';

// Import other content components as needed
// import SalesContent from '../SalesContent/SalesContent';
// import ProductsContent from '../ProductsContent/ProductsContent';
// import StoresContent from '../StoresContent/StoresContent';

function ContentArea() {
  const { selectedMenuItem } = useMenu(); // Access selectedMenuItem from context
  console.log('Inside Content Area', selectedMenuItem);

  // Determine which content component to render based on selectedMenuItem
  let contentToRender;
  console.log('value for switch case:', selectedMenuItem);
  switch (selectedMenuItem) {
    case 'dashboard':
      contentToRender = <DashboardContent />;
      break;
    // Add cases for other menu items

    default:
      // Default content when no menu item is selected
      contentToRender = null;
      break;
  }

  return (
    <div className="content-area">
      {contentToRender}
    </div>
  );
}

export default ContentArea;
