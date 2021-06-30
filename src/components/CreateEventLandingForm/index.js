import React from 'react';

import FormElement from 'components/FormElement';
import { useHistory } from "react-router-dom";
import {
  Form,
  QuestionsContainer,
  FormButton
} from './styles';
import { useForm } from 'react-hook-form';

const CreateEventLandingForm = () => {
  const { register, handleSubmit, control } = useForm();
  let history = useHistory();

  const submit = (data) => {
    history.push({
      pathname: "/create-event",
      state: data
    });
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <QuestionsContainer>
        {options.map(({placeholder, id, text, type, delay, name, required}) => (
          <FormElement
            name={name}
            type={type}
            placeholder={placeholder}
            label={text}
            key={id}
            delay={delay}
            register={register}
            control={control}
            required={required}
          />
        ))}
      </QuestionsContainer>
      <FormButton>CREATE EVENT</FormButton>
    </Form>
  );
}

const options = [
  {id: 1, name: 'name', text: 'Event Name', placeholder: 'Type Event Name', required: true },
  {id: 2, name: 'startTime', type: 'datePicker', text: 'Starts', required: true },
  {id: 3, name: 'endTime', type: 'datePicker', text: 'Ends', delay: true, required: true },
  {id: 5, name: 'location', text: 'Venue Location', placeholder: 'Type Venue Location', required: true },
];

export default CreateEventLandingForm;
