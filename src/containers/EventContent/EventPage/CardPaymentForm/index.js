import React from 'react';
import styled from 'styled-components';
import CardsIcon from 'images/icons/cards-icon.png';
import { RowContainer, ColContainer } from 'sharedComponents/Containers';
import { MainButton } from 'sharedComponents/Buttons';

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

const AdjustedRowContaer = styled(RowContainer)`
  margin-top: 19px;
  margin-bottom: 16px;
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

const CardPaymentForm = () => (
  <CardPaymentContainer>
    <ColContainer>
      <DropDownLabel>Card Number</DropDownLabel>
      <FlexContainer>
        <EventInput placeholder='1000 0000 0000 000' />
        <img src={CardsIcon} />
      </FlexContainer>
    </ColContainer>
    <AdjustedRowContaer>
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
    </AdjustedRowContaer>
    <MainButton>PAY 25.00 USD</MainButton>
  </CardPaymentContainer>
);

export default CardPaymentForm;
