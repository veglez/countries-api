import React from 'react';
import { useTheme } from '../../context/themeContext';
import { Button } from '../BackButton/styles';

const BorderCountryButton = ({ text, to }) => {
  const { currentTheme } = useTheme();

  return (
    <Button theme={currentTheme} to={to}>
      <p>{text}</p>
    </Button>
  );
};

export default BorderCountryButton;
