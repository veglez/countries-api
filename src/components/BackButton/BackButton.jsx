import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
// import { useHistory } from 'react-router';
import { useTheme } from '../../context/themeContext';
import { Button } from './styles';

const BackButton = ({ handleClick }) => {
  const { currentTheme } = useTheme();
  // const history = useHistory();
  return (
    <Button theme={currentTheme} onClick={handleClick}>
      <BsArrowLeft />
      <span>Back</span>
    </Button>
  );
};

export default BackButton;
