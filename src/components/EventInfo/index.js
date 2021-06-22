import React from 'react';
import styled from 'styled-components';
import H4 from 'sharedComponents/H4';
import EventInfoText, { EventInfoStrongTextStyles } from 'sharedComponents/EventInfoText';
import Start from 'sharedComponents/Star';

const AdjustedInfoText = styled(EventInfoText)`
  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const AdjustedH4 = styled(H4)`
  text-align: left;
  font-weight: 400;
  margin-bottom: 61px;

  @media ${({ theme }) => theme.minTablet} {
    margin-top: 49px;
  }

  @media ${({ theme }) => theme.minDesktop} {
    margin-bottom: 29px;
  }
`;

const EventName = styled.h2`
  ${EventInfoStrongTextStyles}
`;

const Category = styled.p`
  font-family: Avenir Next;
  font-size: 21.78px;
  line-height: 33px;
  color: #A6A6A6;
  margin: 0 0 34px;
`;

const EventInfo = () => (
  <div>
    <Category>Home  •  All Categories  •  Music</Category>
    <Start calification={4}/>
    <EventName>Event name</EventName>
    <AdjustedInfoText>Mon 31 May 2021  •  6 P.M.</AdjustedInfoText>
    <AdjustedInfoText>Location</AdjustedInfoText>
    <AdjustedH4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </AdjustedH4>
  </div>
);

export default EventInfo;
