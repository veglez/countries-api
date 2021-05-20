import React, { useState, useContext } from 'react';
import { pallete } from './theme';

const Theme = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const currentTheme = dark ? pallete.dark : pallete.light;
  return (
    <Theme.Provider value={{ dark, setDark, currentTheme }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => {
  return useContext(Theme);
};
