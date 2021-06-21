import React from 'react';
import styled from 'styled-components';
import H4 from 'sharedComponents/H4';
import EventInfoText, { EventInfoStrongTextStyles } from 'sharedComponents/EventInfoText';

const AdjustedH4 = styled(H4)`
  text-align: left;
  font-weight: 400;
  margin-bottom: 61px;

  @media ${({ theme }) => theme.minTablet} {
    margin-top: 49px;
  }
`;

const EventName = styled.h2`
  ${EventInfoStrongTextStyles}
`;


const EventInfo = () => (
  <>
    <EventName>Event name</EventName>
    <EventInfoText>Mon 31 May 2021  •  6 P.M.</EventInfoText>
    <EventInfoText>Location</EventInfoText>
    <AdjustedH4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </AdjustedH4>
  </>
);

export default EventInfo;
