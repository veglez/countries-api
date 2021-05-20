import React, { useState } from 'react';
import { GrFormDown } from 'react-icons/gr';
import { useTheme } from '../../context/themeContext';
import { Button, Container, List } from './styles';
const Filter = () => {
  const { currentTheme } = useTheme();
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Button theme={currentTheme} onClick={() => setShow(!show)}>
        <p>Filter by region</p>
        <GrFormDown />
      </Button>
      <List theme={currentTheme} show={show}>
        <li value='Africa'>Africa</li>
        <li value='America'>America</li>
        <li value='Asia'>Asia</li>
        <li value='Europe'>Europe</li>
        <li value='Oceania'>Oceania</li>
      </List>
    </Container>
  );
};

export default Filter;
