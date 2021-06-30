import styled, { css } from 'styled-components';
import pageStyles from 'themes/pageStyles';

const loginStyles = css`
  height: 13px;
  @media ${({ theme }) => theme.minDesktop} {
    height: 18px;
  }
`;

export const Checkbox = styled.input`
  margin: 0;

  ${({ pathname }) => pageStyles(loginStyles)[pathname]}
`;
