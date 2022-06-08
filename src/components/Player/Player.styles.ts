import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 560px;
  height: 132px;
  background: #f5f5f5;

  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    position: relative;
  }
`;

export const GrowDiv = styled.div`
  flex-grow: 1;
`;

export const PaddedDiv = styled.div<any>`
  padding: 0 16px;

  @media (max-width: 1024px) {
    ${({ absolute }) => {
      if (absolute) {
        return css`
          padding: 0 35px 0 12px;
          position: absolute;
          padding: 0;
          left: 86px;
        `;
      }

      return css`
        padding: 0 35px 0 12px;
      `;
    }}
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const fontStyles = css`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: #000000;
  font-weight: 700;
  font-size: 20px;

  margin: 0;
`;

export const Title = styled.h3`
  ${fontStyles}
  margin-bottom: 8px;

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;

export const Data = styled.p`
  ${fontStyles}
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
