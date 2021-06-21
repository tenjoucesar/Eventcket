import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-family: Avenir Next;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  color: ${props => props.theme.black};
  margin-bottom: 14px;
`;

const H3 = ({ className, children }) => <StyledH3 className={className}>{children}</StyledH3>

export default H3;
