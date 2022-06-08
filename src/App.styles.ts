import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1136px;
  width: 100%;
  margin: 60px auto 0;

  @media (max-width: 1024px) {
    width: auto;
    margin: 30px 16px 0;
  }
`;

const fontStyles = css`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: #000000;
  font-weight: 400;
  font-size: 36px;
  margin: 0;
`;

export const Heading = styled.h1`
  ${fontStyles}
  margin-bottom: 48px;
`;

export const Text = styled.p`
  ${fontStyles}
  font-weight: 700;
  font-size: 20px;
`;

export const PlayerListContainer = styled.div`
  margin: 0;
`;
