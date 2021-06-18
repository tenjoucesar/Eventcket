import React from 'react';
import styled from 'styled-components';

const StyledOval = styled.div`
  background-color: ${props => props.theme.lightGray};
  border-radius: 50%;
  height: 276px;
  width: 276px;
  position: absolute;
`;

const Oval = ({ className }) => <StyledOval className={className} />

export default Oval;
