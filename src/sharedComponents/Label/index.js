import styled, { css } from 'styled-components';
import pageStyles from 'themes/pageStyles';

const createEventStyles = css`
  color: #666666;
  margin-left: 0;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 11px;
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

const loginStyles = css`
  color: ${({ theme }) => theme.white};
`;

export default styled.label`
  font-weight: bold;
  font-family: Roboto;
  font-size: 11.55px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 4px;
  margin-left: 10px;
  text-transform: capitalize;
  min-height: 15px;
  line-height: 17.3px;
  letter-spacing: 0.15px;
  ${({ pathname }) => pageStyles(loginStyles, createEventStyles)[pathname]}
`;
