import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { HeaderStyled } from './styles';

const Header = () => {
  const { currentTheme } = useTheme();
  return (
    <HeaderStyled theme={currentTheme}>
      <Link to='/'>
        <h1>Where in the world?</h1>
      </Link>
      <ThemeSwitch />
    </HeaderStyled>
  );
};

export default Header;
