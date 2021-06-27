import React from 'react';

import CreateContent from 'components/CreateContent';
import Benefits from 'components/Benefits';
import ContactSection from 'components/ContactSection';
import {
  TextContainer,
  Title,
  Main,
  LearnMoreButton,
} from './styles';

import CreateEventLandingForm from 'components/CreateEventLandingForm';

const Landing = () => (
  <>
    <Main>
      <TextContainer>
        <Title>Create Event that ranks</Title>
        <LearnMoreButton>LEARN MORE</LearnMoreButton>
      </TextContainer>
      <CreateEventLandingForm />
    </Main>
    <CreateContent />
    <Benefits />
    <ContactSection />
  </>
);

export default Landing;
