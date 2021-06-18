import React from 'react';
import styled from 'styled-components';

const StyledRedLine = styled.div`
  border-top: 2px solid #E73587;
  margin: 0 auto 42px;
  width: 100px;
  height: 1px;
`;

const RedLine = ({ className }) => <StyledRedLine className={className} />

export default RedLine;
