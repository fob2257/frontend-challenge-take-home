import React from 'react';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import Player from './Player';

import { players } from '../../data/fakeData';

describe('<Player />', () => {
  const setup = (name?: string) => {
    const [player] = players;

    if (name) {
      player.fullName = name;
    }

    return <Player player={player} />;
  };

  it('should render expected value', () => {
    const name = 'Ron Swanson';

    render(setup(name));

    const element = screen.getByText(new RegExp(name, 'i'));

    expect(element).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const component = create(setup());
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
