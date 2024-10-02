// StylesContext.js
import React, { createContext, useState, useContext } from 'react';
import { darkTheme, lightTheme } from './theme';

const StylesContext = createContext();

export function StylesProvider({ children }) {
  const [isDarkStyle, setIsDarkStyle] = useState(true);

  const toggleStyles = () => setIsDarkStyle(prev => !prev);

  const styles = isDarkStyle ? darkTheme : lightTheme;

  return (
    <StylesContext.Provider value={{ styles, toggleStyles }}>
      {children}
    </StylesContext.Provider>
  );
}

export const useStyles = () => useContext(StylesContext);
