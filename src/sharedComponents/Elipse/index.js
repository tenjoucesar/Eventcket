import React from 'react';
import styled from 'styled-components';

const StyledElipse = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 6px solid #D7D7D7;
  margin: auto;
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.minDesktop} {
    width: 206px;
    height: 206px;
    align-items: center;
    border: 8px solid #D7D7D7;
  }
`;

const Elipse = ({ children, className }) => (
  <StyledElipse className={className}>
    {children}
  </StyledElipse>
);

export default Elipse;
