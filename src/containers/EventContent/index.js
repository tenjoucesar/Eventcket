import React from 'react';
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
    url(${DutchCake});
  border-radius: 0px;
  height: 459px;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${({ theme }) => theme.minTablet} {
    background: url(${DutchCakeTablet});
    height: 558px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    background: url(${DutchCakeDesktop});
    height: 899px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const EventContent = () => {
  const EVENT_CREATED = 'EVENT_CREATED';
  const EVENT_PAGE = 'EVENT_PAGE';
  let content = EVENT_PAGE;
  return (
    <>
      <BG />
      <DesktopInfoContainer>
        <Container>
          {content === EVENT_CREATED && <SuccessCreatedEvent />}
          {content === EVENT_PAGE && <EventPage />}
      </Container>
      </DesktopInfoContainer>
  </>
  );
}

export default EventContent;
