import React, { createContext, useContext, useState } from 'react';


const MenuContext = createContext();


export function useMenu() {
  return useContext(MenuContext);
}


export function MenuProvider({ children }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState('null');
  const [isDarkTheme, setDarkTheme] = useState(false);

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
