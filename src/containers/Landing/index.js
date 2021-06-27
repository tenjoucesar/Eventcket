import React, { useState } from 'react';

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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';
import { InputStyles } from 'sharedComponents/Input/styles';

const DatePickerComponent = styled.div`
  .react-datepicker__input-container input {
    ${InputStyles}
  }
`;

const DatePickerC = ({ text }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePickerComponent>

      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </DatePickerComponent>
  );
}

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
          <DatePickerC />
          <Input placeholder='Type Venue Location' label='Venue Location'/>
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
  // { text: 'Starts', placeholder: 'Mon 31 May 2021', id: 2 },
  // { text: 'Ends', placeholder: 'Mon 31 May 2021', id: 3 },
  // { text: 'Venue Location', placeholder: 'Type Venue Location', id: 4 },
];

export default Landing;
