import React, { useState } from 'react';
import SuccessCreatedEvent from 'components/SuccessCreatedEvent';
import EventPage from 'components/EventPage';
import { Container, DesktopInfoContainer, BG } from './styles'

const IMAGES = [
  'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3667&q=80',
  'https://www.halton.com/wp-content/uploads/2020/05/Concert_hall_rock_concert-1366x668.jpg',
];
const EVENT_CREATED = 'EVENT_CREATED';
const EVENT_PAGE = 'EVENT_PAGE';

const EventContent = ({location}) => {
  const [selectedImg, setSelectedImg] = useState(IMAGES[1]);
  let content;
  if (location.state && location.state === EVENT_CREATED) {
    content = EVENT_CREATED;
  } else {
    content = EVENT_PAGE;
  }

  return (
    <>
      <BG>
        <img src={selectedImg} />
      </BG>
      <DesktopInfoContainer>
        <Container>
          {content === EVENT_CREATED && <SuccessCreatedEvent />}
          {content === EVENT_PAGE &&
            <EventPage
              images={IMAGES}
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
            />
          }
      </Container>
      </DesktopInfoContainer>
    </>
  );
}

export default EventContent;
