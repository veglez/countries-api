import React from 'react';
import Filter from '../components/Filter/Filter';
import ListOfCountriesCards from '../components/ListOfCountriesCards/ListOfCountriesCards';
import SearchInput from '../components/SearchInput/SearchInput';
import { Filters, Container } from './homepageStyles';

const Homepage = () => {
  return (
    <Container>
      <Filters>
        <SearchInput />
        <Filter />
      </Filters>
      <ListOfCountriesCards />
    </Container>
  );
};

export default Homepage;
