import React from 'react';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import PlayerList from './PlayerList';

import { players } from '../../data/fakeData';

describe('<PlayerList />', () => {
  const setup = () => <PlayerList players={players} />;

  it('should render expected elements', async () => {
    render(setup());

    const elements = await screen.findAllByTestId('player-card');

    expect(elements.length).toBe(players.length);
  });

  it('should match snapshot', () => {
    const component = create(setup());
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
