import { Player } from '../data/types';

export const getLastPlayedDate = (player: Player): string => {
  const { games } = player;
  let lastPlayedDate = '';
  let idx = 0;

  while (idx < games.length) {
    const { date, accurateDate } = games[idx];
    // the game's `accurate date` should be preferred over games's `date` when available
    const currDate = accurateDate ? accurateDate.date : date;

    if (lastPlayedDate) {
      const res = new Date(lastPlayedDate) < new Date(currDate);

      if (res) {
        lastPlayedDate = currDate;
      }
    } else {
      lastPlayedDate = currDate;
    }

    idx += 1;
  }

  return lastPlayedDate;
};

export const sortPlayers = (players: Player[]): Player[] =>
  players.sort((playerA, playerB) => {
    const dateA = new Date(getLastPlayedDate(playerA));
    const dateB = new Date(getLastPlayedDate(playerB));

    return dateB.getTime() - dateA.getTime();
  });

export const getPlayerWinRatio = (player: Player): number => {
  const { games } = player;

  const wonGames = games.filter((game) => game.winnerName === player.fullName);

  const ratio = wonGames.length / games.length;

  return Math.round(ratio * 10) / 10;
};
