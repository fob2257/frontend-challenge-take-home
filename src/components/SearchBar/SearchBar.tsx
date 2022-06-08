import React from 'react';

import { Form, Input, SubmitButton } from './SearchBar.styles';
import SearchIcon from './SearchIcon';

interface Props {
  searchValue?: string;
  handleOnChange?: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({
  searchValue = '',
  handleOnChange = () => {},
}) => {
  const handleFormOnSubmit = (e) => e.preventDefault();
  const handleInputOnChange = ({ target: { value } }) => handleOnChange(value);

  return (
    <Form aria-label="search form" onSubmit={handleFormOnSubmit}>
      <Input
        aria-label="search input"
        placeholder="Search by name"
        value={searchValue}
        onChange={handleInputOnChange}
      />
      <SubmitButton>
        <SearchIcon />
      </SubmitButton>
    </Form>
  );
};

export default SearchBar;
