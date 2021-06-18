import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-family: Avenir Next;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #2B2B2B;
`;

const H3 = ({ children, className }) => (
  <StyledH3 className={className}>
    {children}
  </StyledH3>
);

export default H3;
