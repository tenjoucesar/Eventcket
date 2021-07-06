import styled, { css } from 'styled-components';
import pageStyles from 'themes/pageStyles';

const loginStyles = css`
  height: 13px;
  @media ${({ theme }) => theme.minDesktop} {
    height: 18px;
  }
`;

export const CheckboxStyles = styled.input`
  margin: 0;
  @-moz-document url-prefix() {
    align-self: flex-start;
    @media ${({ theme }) => theme.minDesktop} {
      align-self: center;
    }
  }
  ${({ pathname }) => pageStyles(loginStyles)[pathname]}
`;

export const Checkbox = ({ ...props }) => <CheckboxStyles {...props} />;
