import React from 'react';
import styled, { css } from 'styled-components';

const StyledEventInfoText = styled.p`
  font-family: Avenir Next;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
`;

const EventInfoText = ({ children, className }) => <StyledEventInfoText className={className}>{children}</StyledEventInfoText>;

export default EventInfoText;

export const EventInfoStrongTextStyles = css`
  line-height: 49px;
  letter-spacing: 1.36184px;
  color: #2E2E2E;
  font-family: Avenir Next Bold;
  font-weight: 500;
  font-size: 40px;
  margin-top: 10px;
`;
