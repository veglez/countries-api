import React, { useEffect, useState } from 'react';
import { GrFormDown } from 'react-icons/gr';
import { useData } from '../../context/dataContext';
import { useTheme } from '../../context/themeContext';
import { Button, Container, List, ListItem } from './styles';
const Filter = () => {
  const { currentTheme } = useTheme();
  const [show, setShow] = useState(false);
  const { allCountries, setFilteredCountries } = useData();
  const [continent, setContinent] = useState([]);

  const handleClick = (e) => {
    const region = e.target.dataset.name.toLowerCase();
    continent.includes(region)
      ? setContinent(continent.filter((c) => c !== region))
      : setContinent([...continent, region]);
  };

  useEffect(() => {
    continent.length === 0
      ? setFilteredCountries(allCountries)
      : setFilteredCountries(
          allCountries.filter(
            (country) => continent.indexOf(country.region.toLowerCase()) !== -1
          )
        );
  }, [continent]);

  return (
    <Container>
      <Button theme={currentTheme} onClick={() => setShow(!show)}>
        <p>Filter by region</p>
        <GrFormDown />
      </Button>
      <List theme={currentTheme} show={show}>
        <ListItem
          isActive={continent.includes('Africa'.toLowerCase())}
          onClick={handleClick}
          data-name='Africa'
        >
          Africa
        </ListItem>
        <ListItem
          isActive={continent.includes('Americas'.toLowerCase())}
          onClick={handleClick}
          data-name='Americas'
        >
          America
        </ListItem>
        <ListItem
          isActive={continent.includes('Asia'.toLowerCase())}
          onClick={handleClick}
          data-name='Asia'
        >
          Asia
        </ListItem>
        <ListItem
          isActive={continent.includes('Europe'.toLowerCase())}
          onClick={handleClick}
          data-name='Europe'
        >
          Europe
        </ListItem>
        <ListItem
          isActive={continent.includes('Oceania'.toLowerCase())}
          onClick={handleClick}
          data-name='Oceania'
        >
          Oceania
        </ListItem>
      </List>
    </Container>
  );
};

export default Filter;
