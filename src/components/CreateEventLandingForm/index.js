import React from 'react';

import FormElement from 'components/FormElement';
import { useHistory } from "react-router-dom";
import {
  Form,
  QuestionsContainer,
  FormButton
} from './styles';

const CreateEventLandingForm = () => {
  let history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    history.push("/create-event");
  }

  return (
    <Form onSubmit={submit}>
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
  );
}

const options = [
  { text: 'Event Name', placeholder: 'Type Event Name', id: 1 },
  { type: 'datePicker', text: 'Starts', className: 'row', id: 2 },
  { type: 'datePicker', text: 'Ends', delay: true,  id: 3 },
  { text: 'Venue Location', placeholder: 'Type Venue Location', id: 5 },
];

export default CreateEventLandingForm;
