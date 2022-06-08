import styled, { css } from 'styled-components';

const fontStyles = css`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: #000000;
  font-weight: 700;
  font-size: 20px;

  margin: 0;
`;

export const Circle = styled.div<any>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ ratio }) => {
    let color = '#eb2323';

    if (ratio > 0 && ratio < 0.25) {
      color = '#f3c41e';
    } else if (ratio >= 0.25 && ratio < 0.75) {
      color = '#00B32A';
    } else if (ratio >= 0.75) {
      color = '#4192DC';
    }

    return color;
  }};
`;

export const Ratio = styled.p`
  ${fontStyles}
  font-weight: 400;
  color: #ffffff;
`;
