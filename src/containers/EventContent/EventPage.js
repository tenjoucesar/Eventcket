import React from 'react';
import styled from 'styled-components';

import Start from 'sharedComponents/Star';
import EventInfo from './EventInfo';
import EventInfoText, { EventInfoStrongTextStyles } from 'sharedComponents/EventInfoText';
import { DropDownForm } from 'sharedComponents/DropDown';
import { MainButton } from 'sharedComponents/Buttons';
import CardsIcon from 'images/icons/cards-icon.png';

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

const DropDownLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.6);
`;

const DropDownsContainer = styled.div`
  display: flex;
  flex-direction: row;
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

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-right: 19px;
  }
`;

const EventInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.32);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
  width: 179px;
  height: 30px;
  padding-left: 15px;
  margin-top: 6px;
`;

const SmallInput = styled(EventInput)`
  width: 54px;
  padding-left: 10px;

  &:first-child {
    margin-right: 9px;
  }
`;

const CardPaymentContainer = styled.div`
  margin-top: 51px;
`;

const FlexContainer = styled.div`
  display: flex;

  img {
    margin-left: 17px;
    margin-top: 6px;
  }
`;

const ExpirationContainer = styled.div`
  margin-right: 36px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 19px;
  margin-bottom: 16px;
`;

const CardPaymentForm = () => (
  <CardPaymentContainer>
    <ColContainer>
      <DropDownLabel>Card Number</DropDownLabel>
      <FlexContainer>
        <EventInput placeholder='1000 0000 0000 000' />
        <img src={CardsIcon} />
      </FlexContainer>
    </ColContainer>
    <RowContainer>
      <ExpirationContainer>
        <DropDownLabel>Expiration Date</DropDownLabel>
        <FlexContainer>
          <SmallInput placeholder='10' />
          <SmallInput placeholder='12' />
        </FlexContainer>
      </ExpirationContainer>
      <ColContainer>
        <DropDownLabel>CVV</DropDownLabel>
        <SmallInput placeholder='111' />
      </ColContainer>
    </RowContainer>
    <MainButton>PAY 25.00 USD</MainButton>
  </CardPaymentContainer>
);

const EventPage = () => (
  <>
    <Category>Home  •  All Categories  •  Music</Category>
    <Start calification={4}/>
    <EventInfo />
    <EventInfoText>Starting at<Price> 25$</Price></EventInfoText>
    <DropDownsContainer>
      <ColContainer>
        <DropDownLabel>Ticket type</DropDownLabel>
        <DropDownForm
          options={TICKET_TYPE}
          placeholder='Select option...'
        />
      </ColContainer>
      <ColContainer>
        <DropDownLabel>Quantity</DropDownLabel>
        <DropDownForm
          options={TICKET_TYPE}
          placeholder='Select option...'
        />
      </ColContainer>
    </DropDownsContainer>
    <AdjustedMainButton>Buy Tickets</AdjustedMainButton>

    <CardPaymentForm />
  </>
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
export default EventPage;
