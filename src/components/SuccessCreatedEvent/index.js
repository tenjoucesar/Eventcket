import React from 'react';
import { useHistory } from "react-router-dom";

import EventInfo from 'components/EventInfo';
import { ButtonsContainer, SuccessMessage, AdjustedMainButton } from './styles';

const SuccessCreatedEvent = () => {
  let history = useHistory();

  return (
    <>
      <SuccessMessage>
        √  Congratulation!! Your event is created successfully you
        can now manage your event or share the event page directly to your attendances
      </SuccessMessage>
      <EventInfo />
      <ButtonsContainer>
        <AdjustedMainButton onClick={() => history.push("/create-event")}>Manage Event</AdjustedMainButton>
        <AdjustedMainButton onClick={() => history.push("/events/1")}>Event Page</AdjustedMainButton>
      </ButtonsContainer>
    </>
  );
};

export default SuccessCreatedEvent;
