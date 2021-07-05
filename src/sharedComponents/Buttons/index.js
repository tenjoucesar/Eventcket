import React from 'react';
import styled, { css } from 'styled-components';

export const MainButtonStyles = css`
  background-color: ${({theme}) => theme.primaryColor};
  border: none;
  border-radius: 32px;
  height: 42px;
  text-align: center;
  padding: 0 12px;
  color: ${({theme}) => theme.white};
  font-family: Avenir Next;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    opacity:0.8;
  }

  @media ${({theme}) => theme.minTablet} {
    font-size: 18px;
  }

  @media ${({theme}) => theme.minDesktop} {
    font-size: 20px;
  }
`;

const StyledMainButton = styled.button`
  ${MainButtonStyles}
`;

export const MainButton = ({ children, className,...rest }) => (
  <StyledMainButton className={className} {...rest}>
    {children}
  </StyledMainButton>
);
