import React from 'react';
import CreateContent from 'components/CreateContent';
import Benefits from 'components/Benefits';
import ContactSection from 'components/ContactSection';
import FormElement from 'components/FormElement';
import {
  TextContainer,
  Title,
  Main,
  LearnMoreButton,
  Form,
  QuestionsContainer,
  FormButton
} from './styles';

const Landing = () => (
  <>
    <Main>
      <TextContainer>
        <Title>Create Event that ranks</Title>
        <LearnMoreButton>LEARN MORE</LearnMoreButton>
      </TextContainer>
      <Form>
        <QuestionsContainer>
          {options.map(({placeholder, id, text}) => (
            <FormElement placeholder={placeholder} label={text} key={id}/>
          ))}
        </QuestionsContainer>
        <FormButton>CREATE EVENT</FormButton>
      </Form>
    </Main>
    <CreateContent />
    <Benefits />
    <ContactSection />
  </>
);

const options = [
  { text: 'Event Name', placeholder: 'Type Event Name', id: 1 },
  { text: 'Starts', placeholder: 'Mon 31 May 2021', id: 2 },
  { text: 'Ends', placeholder: 'Mon 31 May 2021', id: 3 },
  { text: 'Venue Location', placeholder: 'Type Venue Location', id: 4 },
];

export default Landing;
