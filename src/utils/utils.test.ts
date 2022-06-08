import { getLastPlayedDate, sortPlayers, getPlayerWinRatio } from './utils';

import * as fakeData from '../data/fakeData';

describe('Utils', () => {
  it('getLastPlayedDate', () => {
    const date = '2021-10-10';
    const [game] = fakeData.players[0].games;
    const games = [
      { ...game, date: '2019-02-10' },
      { ...game, date: '2021-10-11', accurateDate: { date } },
      { ...game, date: '2020-03-10', accurateDate: { date: '2020-05-10' } },
    ];

    const player = { ...fakeData.players[0], games };

    const res = getLastPlayedDate(player);

    expect(res).toBe(date);
  });

  it('sortPlayers', () => {
    const playerA = {
      date: '2021-10-10',
      name: 'playerA',
    };

    const playerB = {
      date: '2022-03-10',
      name: 'playerB',
    };

    const [player] = fakeData.players;
    const [game] = player.games;

    const players = [
      {
        ...player,
        fullName: playerA.name,
        games: [
          {
            ...game,
            date: '2017-10-10',
            accurateDate: { date: playerA.date },
          },
        ],
      },
      {
        ...player,
        fullName: playerB.name,
        games: [
          {
            ...game,
            date: '2018-10-10',
            accurateDate: { date: playerB.date },
          },
        ],
      },
    ];

    const res = sortPlayers(players);

    expect(res[0].fullName).toBe(playerB.name);
  });

  it('getPlayerWinRatio', () => {
    const name = 'John Doe';
    const [game] = fakeData.players[0].games;
    const games = [
      { ...game, winnerName: name },
      { ...game, winnerName: name },
      { ...game, winnerName: 'Robert' },
      { ...game, winnerName: name },
    ];

    const player = { ...fakeData.players[0], games, fullName: name };

    const res = getPlayerWinRatio(player);

    expect(res).toBeGreaterThan(0.7);
  });
});
