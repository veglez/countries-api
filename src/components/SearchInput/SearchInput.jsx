import React from 'react';
import { SearchField } from './styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { useTheme } from '../../context/themeContext';
import { useData } from '../../context/dataContext';

const SearchInput = () => {
  const { currentTheme } = useTheme();
  const { setSearchField, searchField } = useData();

  return (
    <SearchField htmlFor='search' theme={currentTheme}>
      <AiOutlineSearch />
      <input
        type='text'
        name='search'
        id='search'
        placeholder={'Search for a country...'}
        onInput={(e) => setSearchField(e.target.value)}
        value={searchField}
      />
    </SearchField>
  );
};

export default SearchInput;
