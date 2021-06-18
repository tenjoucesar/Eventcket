import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
font-family: Avenir Next;
font-size: 20px;
line-height: 27px;
text-align: center;
color: ${props => props.theme.darkGray};
`;

const  Paragraph = ({ children, className }) => (
  <StyledParagraph className={className}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
