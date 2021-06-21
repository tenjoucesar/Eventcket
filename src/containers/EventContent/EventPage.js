import React from 'react';
import styled from 'styled-components';

import Start from 'sharedComponents/Star';
import EventInfo from './EventInfo';
import EventInfoText, { EventInfoStrongTextStyles } from 'sharedComponents/EventInfoText';

const Category = styled.p`
  font-family: Avenir Next;
  font-size: 21.78px;
  line-height: 33px;
  color: #A6A6A6;
  margin: 0 0 34px;
`;

const Price = styled.strong`
  ${EventInfoStrongTextStyles}
`;

const EventPage = () => (
  <>
    <Category>Home  •  All Categories  •  Music</Category>
    <Start calification={4}/>
    <EventInfo />
    <EventInfoText>Starting at<Price> 25$</Price></EventInfoText>
  </>
);

export default EventPage;
