import React from 'react';
import { useTheme } from '../../context/themeContext';
import { Button } from './styles';

const BorderCountryButton = ({ text, handleClick, to }) => {
  const { currentTheme } = useTheme();

  return (
    <Button theme={currentTheme} onClick={handleClick} to={to}>
      <p>{text}</p>
    </Button>
  );
};

export default BorderCountryButton;
