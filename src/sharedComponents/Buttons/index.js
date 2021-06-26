import React from 'react';
import styled, { css } from 'styled-components';

export const MainButtonStyles = css`
  background-color: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 32px;
  height: 42px;
  text-align: center;
  padding: 0 12px;
  color: ${props => props.theme.white};
  font-family: Avenir Next;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledMainButton = styled.button`
  ${MainButtonStyles}
`;

export const MainButton = ({ children, className }) => (
  <StyledMainButton className={className}>
    {children}
  </StyledMainButton>
);
