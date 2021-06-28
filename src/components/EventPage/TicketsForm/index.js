import React from 'react';
import styled from 'styled-components';
import { DropDownForm } from 'sharedComponents/DropDown';
import EventInfoText, { EventInfoStrongTextStyles } from 'sharedComponents/EventInfoText';
import { ColContainer, RowContainer } from 'sharedComponents/Containers';
import { MainButton } from 'sharedComponents/Buttons';

const Price = styled.strong`
  ${EventInfoStrongTextStyles}
`;

const DropDownLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
`;

const AdjustedMainButton = styled(MainButton)`
  width: 100%;
  max-width: 301px;
  height: 61px;
  font-size: 21.78px;
  line-height: 33px;
  font-family: Avenir Next Bold;
  text-transform: capitalize;
  margin-top: 29px;
`;

const AdjustedColContainer = styled(ColContainer)`
  &:first-child {
    margin-right: 19px;
  }
`;

const TicketsForm = () => (
  <div>
    <EventInfoText>Starting at<Price> 25$</Price></EventInfoText>
    <RowContainer>
      <AdjustedColContainer>
        <DropDownLabel>Ticket type</DropDownLabel>
        <DropDownForm
          options={TICKET_TYPE}
          placeholder='Select option...'
        />
      </AdjustedColContainer>
      <AdjustedColContainer>
        <DropDownLabel>Quantity</DropDownLabel>
        <DropDownForm
          options={TICKET_TYPE}
          placeholder='Select option...'
        />
      </AdjustedColContainer>
    </RowContainer>
    <AdjustedMainButton>Buy Tickets</AdjustedMainButton>
  </div>
);

export const TICKET_TYPE = [
  { name: 'ASAP', value: 'ASAP' },
  { name: '30 days', value: '30 days' },
  { name: 'Within 3 months', value: 'Within 3 months' },
  { name: 'Within 6 months', value: 'Within 6 months' },
  { name: '6 months to 1 year', value: '6 months to 1 year' },
  { name: '1 year or more', value: '1 year or more' },
  { name: 'In No Rush', value: 'In No Rush' },
];

export default TicketsForm;
