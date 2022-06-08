import React from 'react';

import {
  Container,
  GrowDiv,
  PaddedDiv,
  Img,
  Title,
  Data,
} from './Player.styles';
import Ratio from '../Ratio/Ratio';

import { Player } from '../../data/types';
import { getLastPlayedDate, getPlayerWinRatio } from '../../utils/utils';

type Props = {
  player: Player;
};

const PlayerComponent: React.FC<Props> = ({ player }) => {
  const lastActivity = getLastPlayedDate(player);
  const opponents = player.games.filter(
    (game) => game.winnerName !== player.fullName,
  );
  const ratio = getPlayerWinRatio(player);

  return (
    <Container data-testid="player-card">
      <PaddedDiv>
        <Img src={player.avatar} alt="Player avatar" />
      </PaddedDiv>
      <GrowDiv>
        <Title>{player.fullName}</Title>
        <Data>Last Activity: {lastActivity}</Data>
        <Data>Unique Opponents: {opponents.length}</Data>
      </GrowDiv>
      <PaddedDiv absolute>
        <Ratio ratio={ratio} />
      </PaddedDiv>
    </Container>
  );
};

export default PlayerComponent;
