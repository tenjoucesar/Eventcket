import React from 'react';
import styled from 'styled-components';

const StyledMainButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 32px;
  height: 42px;
  text-align: center;
  padding: 0 12px;
  color: ${props => props.theme.white};
  font-family: Avenir Next;
  text-transform: uppercase;
`;

export const MainButton = ({ children, className }) => (
  <StyledMainButton className={className}>
    {children}
  </StyledMainButton>
);
