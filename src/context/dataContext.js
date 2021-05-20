import React, { useContext, useEffect, useState } from 'react';

const Countries = React.createContext(null);

export default function CountriesProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(allCountries);
  const [searchField, setSearchField] = useState(filteredCountries);

  useEffect(() => {
    setFilteredCountries(allCountries);
    setSearchField(allCountries);
  }, [allCountries]);

  return (
    <Countries.Provider
      value={{
        allCountries,
        setAllCountries,
        filteredCountries,
        setFilteredCountries,
        searchField,
        setSearchField,
      }}
    >
      {children}
    </Countries.Provider>
  );
}

export const useData = () => {
  return useContext(Countries);
};
