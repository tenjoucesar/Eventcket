import React from 'react';
import styled from 'styled-components';
import DjBG from 'images/dj-hand.jpeg';
import { MainButton } from 'sharedComponents/Buttons';
import CreateContent from 'components/CreateContent';
import Benefits from 'components/Benefits';

const TextContainer = styled.div`
  padding: 0 6px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-family: Gabriela Alt;
  font-size: 66.7638px;
  line-height: 69px;
  color: ${props => props.theme.white};
  max-width: 363px;
  margin: auto;
  margin-bottom: 46px;
`;

const Main = styled.main`
  height: 896px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 200, 67, 0.7) 100%), url(${DjBG});
  background-blend-mode: color, normal;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  padding: 99px 27px 0;
`;

const LearnMoreButton = styled(MainButton)`
  padding: 12px 30px;
`;

const Form = styled.form`
  border-radius: 23.11px;
  padding: 20px 30px;
  margin-top: 46px;
  background: #a1a1a1;
  height: 349px;
`;

const Landing = () => {
  return (
    <>
      <Main>
        <TextContainer>
          <Title>Create Event that ranks</Title>
          <LearnMoreButton>LEARN MORE</LearnMoreButton>
        </TextContainer>
      </Main>
      <CreateContent />
      <Benefits />
    </>
  );
};

export default Landing;
