import styled, { css } from 'styled-components';
import pageStyles from 'themes/pageStyles';

export const createEventStyles = css`
  color: #666666;
  border: 1px solid #bea4a4;
  height: 47px;
  padding-left: 15px;
  font-size: 14px;
  @media ${({ theme }) => theme.minDesktop} {
    height: 50px;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const Select = styled.select`
  height: 47px;
  padding-left: 15px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 22.6px;
  ${({ pathname }) => pageStyles(createEventStyles, createEventStyles)[pathname]}
`;

/* const createEventStyles = css`
  label,
  input,
  select,
  input::placeholder {
    color: #666666;
  }
  label {
    margin-left: 0;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 11px;
    @media ${({ theme }) => theme.minDesktop} {
      font-size: 16px;
      margin-bottom: 6px;
    }
  }
  input,
  select {
    border: 1px solid #bea4a4;
    height: 47px;
    padding-left: 15px;
    font-size: 14px;
    @media ${({ theme }) => theme.minDesktop} {
      height: 50px;
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  input[type='checkbox'] {
    height: 22px;
  }

  @media ${({ theme }) => theme.minDesktop} {
    width: 88%;
  }
`;
 */
