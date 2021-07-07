import React, { useContext } from 'react';
import EventInfo from 'components/EventInfo';

import { DeviceContext } from 'providers/Device';
import { RowContainer } from 'sharedComponents/Containers';
import CardPaymentForm from './CardPaymentForm';
import EventImages from './EventImages/index.js';
import TicketsForm from './TicketsForm';

const EventPage = ({ images, selectedImg, setSelectedImg }) => {
  const { device } = useContext(DeviceContext);

  return (
    <RowContainer>
      {device !== 'mobile' &&
        <EventImages
          images={images}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      }
      <div>
        <EventInfo />
        <TicketsForm />
        <CardPaymentForm />
      </div>
    </RowContainer>
  );
};

export default EventPage;
