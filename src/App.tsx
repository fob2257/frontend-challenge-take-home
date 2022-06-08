import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import PlayerList from './components/PlayerList/PlayerList';
import { Container, Heading, Text, PlayerListContainer } from './App.styles';

import { useFakeQuery } from './data/fakeFetchClient';

const App: React.FC = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useFakeQuery('SelectCatPlayers', {
    variables: { search: searchTerm },
  });

  const handleOnChange = (value: string) => setSearchBarValue(value);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setSearchTerm(searchBarValue);
      clearTimeout(timeId);
    }, 400);

    return () => {
      clearTimeout(timeId);
    };
  }, [searchBarValue]);

  return (
    <Container>
      <Heading>Recent Activity</Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error...</Text>
      ) : (
        <>
          <SearchBar
            searchValue={searchBarValue}
            handleOnChange={handleOnChange}
          />
          <PlayerListContainer>
            <PlayerList players={data || []} />
          </PlayerListContainer>
        </>
      )}
    </Container>
  );
};

export default App;
