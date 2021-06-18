import React from 'react';
import styled from 'styled-components';

const StyledSecondaryText = styled.h2`
  font-family: Gabriela Alt;
  font-weight: bold;
  font-size: 40px;
  line-height: 57px;
  text-align: center;
  color: ${props => props.theme.primaryDark};
`;

const SecondaryText = ({children, className}) => (
  <StyledSecondaryText className={className}>
    {children}
  </StyledSecondaryText>
);

export default SecondaryText;
