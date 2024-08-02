import React, { createContext, useContext, useState } from 'react';

// Create context
const AppContext = createContext();

// Custom hook to use context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Provider component
export const AppProvider = ({ children }) => {
  const [favourite, setFav] = useState([]);

  const addToFavourite = (book) => {
    setFav(prevFav => [...prevFav, book]);
  };

  const remove = (id) => {
    setFav(prevFav => prevFav.filter(book => book.id !== id));
  };

  return (
    <AppContext.Provider value={{ favourite, addToFavourite, remove }}>
      {children}
    </AppContext.Provider>
  );
};
