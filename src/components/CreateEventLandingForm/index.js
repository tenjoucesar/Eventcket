import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import FormElement from 'components/FormElement';
import {
  Form,
  QuestionsContainer,
  FormButton
} from './styles';

const DELAY_HOURS = 5;
Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}
const date = new Date();
const delayedDate = new Date().addHours(DELAY_HOURS);

const CreateEventLandingForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      startTime: date,
      endTime: delayedDate,
    }
  });
  let history = useHistory();

  const submit = (data) => {
    debugger;
    history.push({
      pathname: "/create-event",
      state: data,
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
