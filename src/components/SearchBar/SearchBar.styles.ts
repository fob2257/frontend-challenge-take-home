import styled, { css } from 'styled-components';

const fontStyles = css`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #3a434d;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 48px;
`;

export const Input = styled.input`
  ${fontStyles}
  padding: 8px 12px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #c2c2c2;
`;

export const SubmitButton = styled.button.attrs(() => ({ type: 'submit' }))`
  background-color: unset;
  border: unset;
  cursor: pointer;
  position: absolute;
  padding-right: 16px;
`;
