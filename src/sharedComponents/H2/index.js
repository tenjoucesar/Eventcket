import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-family: Gabriela Alt;
  font-weight: bold;
  font-size: 40px;
  line-height: 57px;
  text-align: center;
  color: ${props => props.theme.primaryDark};
`;

const H2 = ({children, className}) => (
  <StyledH2 className={className}>
    {children}
  </StyledH2>
);

export default H2;
