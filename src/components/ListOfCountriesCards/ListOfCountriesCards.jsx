import React, { useEffect } from 'react';
import { useData } from '../../context/dataContext';
import CountryCard from '../CountryCard/CountryCard';
import { Container } from './styles';

const ListOfCountriesCards = () => {
  const { searchField, setAllCountries } = useData();

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2')
      .then((res) => res.json())
      .then((data) => setAllCountries(data));
  }, []);

  if (searchField.length < 1) return <h3>Not found</h3>;
  return (
    <Container>
      {searchField.map((country) => {
        return (
          <CountryCard
            key={country.alpha3Code}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
    </Container>
  );
};

export default ListOfCountriesCards;