import styled, { css } from 'styled-components';
import pageStyles from 'themes/pageStyles';

export const createEventStyles = css`
  color: #666666;
  border: ${({ theme }) => theme.appMainBorder};
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

