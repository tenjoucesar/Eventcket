import React from 'react';
import EventInfo from 'components/EventInfo';
import CardPaymentForm from './CardPaymentForm';
import { RowContainer } from 'sharedComponents/Containers';
import EventImages from './EventImages/index.js';
import TicketsForm from './TicketsForm';

const EventPage = () => (
  <RowContainer>
    <EventImages />
    <div>
      <EventInfo />
      <TicketsForm />
      <CardPaymentForm />
    </div>
  </RowContainer>
);

export default EventPage;
