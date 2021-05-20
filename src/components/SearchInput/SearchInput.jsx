import React from 'react';
import { SearchField } from './styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { useTheme } from '../../context/themeContext';

const SearchInput = () => {
  const { currentTheme } = useTheme();
  return (
    <SearchField htmlFor='search' theme={currentTheme}>
      <AiOutlineSearch />
      <input
        type='text'
        name='search'
        id='search'
        placeholder={'Search for a country...'}
      />
    </SearchField>
  );
};

export default SearchInput;
