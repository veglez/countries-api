import React from 'react';
import CountryCard from '../components/CountryCard/CountryCard';
import Filter from '../components/Filter/Filter';
import SearchInput from '../components/SearchInput/SearchInput';

const Homepage = () => {
  return (
    <div>
      <SearchInput />
      <Filter />
      <CountryCard />
    </div>
  );
};

export default Homepage;
