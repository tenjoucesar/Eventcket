import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  font-family: Avenir Next;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #2B2B2B;
`;

const H4 = ({ children, className }) => (
  <StyledH4 className={className}>
    {children}
  </StyledH4>
);

export default H4;
