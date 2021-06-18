import React from 'react';
import styled from 'styled-components';

const StyledElipse = styled.div`
  width: 160px;
  height: 160px;
  left: 112.33px;
  top: 61.5px;
  border-radius: 50%;
  border: 6px solid #D7D7D7;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Elipse = ({ children, className }) => (
  <StyledElipse className={className}>
    {children}
  </StyledElipse>
);

export default Elipse;
