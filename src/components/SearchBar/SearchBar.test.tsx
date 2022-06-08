import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('should render correctly', () => {
    render(<SearchBar />);

    const formElement = screen.getByRole('form', { name: 'search form' });

    expect(formElement).toBeInTheDocument();
  });

  it('should return typed value', () => {
    let searchValue = '';
    const mockedHandleOnChange = jest.fn((value) => {
      searchValue = value;
    });

    render(
      <SearchBar
        searchValue={searchValue}
        handleOnChange={mockedHandleOnChange}
      />,
    );

    const inputElement = screen.getByRole('textbox', { name: 'search input' });
    const value = 'python';
    fireEvent.change(inputElement, { target: { value } });

    expect(mockedHandleOnChange).toHaveBeenCalled();
    expect(searchValue).toBe(value);
  });

  it('should match snapshot', () => {
    const component = create(<SearchBar />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
