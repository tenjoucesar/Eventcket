import React from 'react';
import styled from 'styled-components';

const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowContainer = ({ className, children }) => <StyledRowContainer className={className}>{children}</StyledRowContainer>;

const StyledColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColContainer = ({ className, children }) => <StyledColContainer className={className}>{children}</StyledColContainer>;
