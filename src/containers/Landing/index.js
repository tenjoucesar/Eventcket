import React from 'react';

import CreateContent from 'components/CreateContent';
import Benefits from 'components/Benefits';
import ContactSection from 'components/ContactSection';
import {
  TextContainer,
  Title,
  Main,
  LearnMoreButton,
  Form,
  QuestionsContainer,
  FormButton
} from './styles';
import "react-datepicker/dist/react-datepicker.css";
import FormElement from 'components/FormElement';

const Landing = () => (
  <>
    <Main>
      <TextContainer>
        <Title>Create Event that ranks</Title>
        <LearnMoreButton>LEARN MORE</LearnMoreButton>
      </TextContainer>
      <Form>
        <QuestionsContainer>
          {options.map(({placeholder, id, text, type, delay}) => (
            <FormElement
              type={type}
              placeholder={placeholder}
              label={text}
              key={id}
              delay={delay}
            />
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
  { type: 'datePicker', text: 'Starts', className: 'row', id: 2 },
  { type: 'datePicker', text: 'Ends', delay: true,  id: 3 },
  { text: 'Venue Location', placeholder: 'Type Venue Location', id: 5 },
];

export default Landing;
