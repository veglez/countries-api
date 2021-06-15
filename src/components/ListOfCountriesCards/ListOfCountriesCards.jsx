import React from 'react';
import { useData } from '../../context/dataContext';
import CountryCard from '../CountryCard/CountryCard';
import { Container } from './styles';

const ListOfCountriesCards = () => {
  const { allCountries, searchField, filteredCountries } = useData();

  let filteredBySearch = filteredCountries.filter((country) =>
    country.name.toLowerCase().includes(searchField)
  );

  if (allCountries.length < 1) return <h3>Loading...</h3>;
  if (filteredBySearch.length < 1) return <h3>Not found</h3>;
  return (
    <Container>
      {filteredBySearch.map((country) => {
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
