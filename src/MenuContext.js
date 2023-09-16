import React, { createContext, useContext, useState } from 'react';

// Create a context for the menu
const MenuContext = createContext();

// Custom hook to access the menu context
export function useMenu() {
  return useContext(MenuContext);
}

// Provider component to wrap the entire app
export function MenuProvider({ children }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState('null');
  const [isDarkTheme, setDarkTheme] = useState(true);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    console.log('handleMenuItemClick called with:', menuItem);
  };

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    console.log('toggleTheme called');
  };

  const value = {
    selectedMenuItem,
    handleMenuItemClick,
    isDarkTheme,
    toggleTheme,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
