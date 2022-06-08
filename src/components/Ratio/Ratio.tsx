import React from 'react';

import { Circle, Ratio } from './Ratio.styles';

type Props = {
  ratio: number;
};

const RatioComponent: React.FC<Props> = ({ ratio }) => (
  <Circle ratio={ratio}>
    <Ratio>{ratio}</Ratio>
  </Circle>
);

export default RatioComponent;
