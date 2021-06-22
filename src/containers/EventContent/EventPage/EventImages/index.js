import React from 'react';
import styled from 'styled-components';

const EventsImgContainer = styled.div`
  @media ${({ theme }) => theme.minTablet} {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
  }

  @media ${({ theme }) => theme.minDesktop} {
    margin-right: 97px;
  }
`;

const MainImg = styled.img`
  @media ${({ theme }) => theme.minTablet} {
    width: 288px;
    height: 513px;
    margin-bottom: 26px;
  }
`;

const SubImg = styled.img`
  @media ${({ theme }) => theme.minTablet} {
    width: 133px;
    height: 133px;

    &:first-child {
      margin-right: 22px;
    }
  }
`;

const EventImages = () => (
  <EventsImgContainer>
    <MainImg />
    <div>
      <SubImg />
      <SubImg />
    </div>
</EventsImgContainer>
);

export default EventImages;
