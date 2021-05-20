import React from 'react';
import { useTheme } from '../../context/themeContext';
import { MoonIcon, Button } from './styles';

const ThemeSwitch = () => {
  const { dark, setDark } = useTheme();
  return (
    <Button onClick={() => setDark(!dark)}>
      <MoonIcon $isDark={dark} />
      <span>Dark Mode</span>
    </Button>
  );
};

export default ThemeSwitch;
