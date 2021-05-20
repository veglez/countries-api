import React from 'react';
import { useTheme } from '../../context/themeContext';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { HeaderStyled } from './styles';

const Header = () => {
  const { currentTheme } = useTheme();
  return (
    <HeaderStyled theme={currentTheme}>
      <h1>Where in the world?</h1>
      <ThemeSwitch />
    </HeaderStyled>
  );
};

export default Header;
