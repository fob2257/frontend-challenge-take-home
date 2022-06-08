import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

import * as fakeFetchClient from './data/fakeFetchClient';
import * as fakeDataMock from './data/fakeData';

describe('<App />', () => {
  it('should render expected element', () => {
    render(<App />);

    const element = screen.getByText(/recent activity/i);

    expect(element).toBeInTheDocument();
  });

  it('should render loading message', () => {
    const useFakeQuerySpy = jest.spyOn(fakeFetchClient, 'useFakeQuery');
    useFakeQuerySpy.mockReturnValue({
      loading: true,
      error: null,
      data: [],
    });

    render(<App />);

    const element = screen.getByText(/loading/i);
    expect(element).toBeInTheDocument();

    useFakeQuerySpy.mockRestore();
  });

  it('should render error message', () => {
    const useFakeQuerySpy = jest.spyOn(fakeFetchClient, 'useFakeQuery');
    useFakeQuerySpy.mockReturnValue({
      loading: false,
      error: new Error('Custom error message'),
      data: [],
    });

    render(<App />);

    const loadingElement = screen.queryByText(/loading/i);
    expect(loadingElement).toBeNull();

    const errorElement = screen.getByText(/error/i);
    expect(errorElement).toBeInTheDocument();

    useFakeQuerySpy.mockRestore();
  });

  it('should search for typed value', async () => {
    const [player] = fakeDataMock.players;
    const mockedPlayers = [
      { ...player, fullName: 'Duke Silver' },
      { ...player, fullName: 'John Doe' },
      { ...player, fullName: 'Papa John' },
    ];

    // @ts-ignore
    fakeDataMock.players = mockedPlayers;

    render(<App />);

    let elements = await screen.findAllByTestId('player-card');
    expect(elements.length).toBe(mockedPlayers.length);

    const inputElement = screen.getByRole('textbox', { name: 'search input' });
    const value = 'john';
    fireEvent.change(inputElement, { target: { value } });

    const loadingElement = await screen.findByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();

    elements = await screen.findAllByTestId('player-card');
    expect(elements.length).toBe(2);
  });
});
