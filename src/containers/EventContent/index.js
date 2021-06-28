import React, { useState } from 'react';
import styled from 'styled-components';
import DutchCake from 'images/dutch-cake.png';
import DutchCakeTablet from 'images/dutch-cake-tab.png';
import DutchCakeDesktop from 'images/dutch-cake-desktop.png';
import SuccessCreatedEvent from './SuccessCreatedEvent';
import EventPage from './EventPage';

const Container = styled.div`
  text-align: left;
  padding: 22px 20px 113px;
  background-color: ${({ theme }) => theme.white};

  @media ${({ theme }) => theme.minTablet} {
    padding: 75px 60px 138px
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    padding: 46px 35px 215px 68px;
    max-width: 1177px;
    margin-top: -177px;
    margin-bottom: 74px;
  }
`;

const DesktopInfoContainer = styled.div`
  @media ${({ theme }) => theme.minLargeDesktop} {
    background: #F1F1F1;
    height: 892px;
    display: flex;
    justify-content: center;
  }
`;

const BG = styled.div`
  background: linear-gradient(
    180deg,
    rgba(39, 36, 89, 0) 0%,
    rgba(39, 36, 89, 0.4) 100%),
  border-radius: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 459px;

  img {
    height: 459px;
    width: 100vw;
  }

  @media ${({ theme }) => theme.minTablet} {
    height: 558px;
    background-repeat: no-repeat;
    background-size: cover;

    img {
      height: 558px;
    }
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    height: 899px;
    background-repeat: no-repeat;
    background-size: cover;

    img {
      height: 899px;
    }
  }
`;

const IMAGES = [
  'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3667&q=80',
  'https://www.halton.com/wp-content/uploads/2020/05/Concert_hall_rock_concert-1366x668.jpg',
];
const EVENT_CREATED = 'EVENT_CREATED';
const EVENT_PAGE = 'EVENT_PAGE';

const EventContent = () => {
  const [selectedImg, setSelectedImg] = useState(IMAGES[1]);
  let content = EVENT_PAGE;

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
