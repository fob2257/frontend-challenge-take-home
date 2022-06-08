import React from 'react';

import { Container } from './PlayerList.styles';
import PlayerComponent from '../Player/Player';

import { Player } from '../../data/types';
import { sortPlayers } from '../../utils/utils';

type Props = {
  players: Player[];
};

const PlayerList: React.FC<Props> = ({ players = [] }) => {
  const sortedPlayers = sortPlayers([...players]);

  return (
    <Container>
      {sortedPlayers.map((player) => (
        <PlayerComponent key={player.fullName} player={player} />
      ))}
    </Container>
  );
};

export default PlayerList;
