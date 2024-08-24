import React from 'react';
import {SearchHeaderProps} from '@customTypes/Components';
import {SearchWrapper} from './styles';
import InputField from '@components/InputField';

const SearchHeader = ({searchText, onSearchType}: SearchHeaderProps) => {
  return (
    <SearchWrapper>
      <InputField
        placeholder="Search by title"
        onChange={value => {
          onSearchType(value);
        }}
        value={searchText}
      />
    </SearchWrapper>
  );
};

export default SearchHeader;
