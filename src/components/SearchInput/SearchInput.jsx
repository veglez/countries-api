import React, { useEffect, useState } from 'react';
import { SearchField } from './styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { useTheme } from '../../context/themeContext';
import { useData } from '../../context/dataContext';

const SearchInput = () => {
  const { currentTheme } = useTheme();
  const { filteredCountries, setSearchField } = useData();

  const [value, setValue] = useState('');

  useEffect(() => {
    setSearchField(
      filteredCountries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  return (
    <SearchField htmlFor='search' theme={currentTheme}>
      <AiOutlineSearch />
      <input
        type='text'
        name='search'
        id='search'
        placeholder={'Search for a country...'}
        onInput={(e) => setValue(e.target.value)}
        value={value}
      />
    </SearchField>
  );
};

export default SearchInput;
