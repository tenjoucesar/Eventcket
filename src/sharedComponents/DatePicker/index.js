import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

import { InputStyles } from 'sharedComponents/Input/styles';

const DatePickerContainer = styled.div`
  display: inline-flex;

  .react-datepicker-wrapper {
    width: -webkit-fill-available;
  }

  .react-datepicker-wrapper:first-child {
    margin-right: 22px;
  }

  .react-datepicker__input-container input {
    ${InputStyles}
    width: 137px;
  }

  @media (min-width: 450px) {
    .react-datepicker__input-container input {
      width: -webkit-fill-available;
    }
  }
`;
const DELAY_HOURS = 5;
const DatePickerComponent = ({ delay, register, name, control }) => {
  const [startDate, setStartDate] = useState(new Date());
  const delayedHour = delay && startDate.setHours(startDate.getHours() + DELAY_HOURS);
  return (
    <DatePickerContainer>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat='eeee d MMMM, yyyy'
        {...register(name)}
      />
      <DatePicker
        selected={delay ? delayedHour : startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption='Time'
        dateFormat='h:mm aa'
        // {...register(name)}
      />
{/*
              <Controller
                name={name}
                control={control}
                render={({ onChange, value }) => (
                    <DatePicker
                        selected={value}
                        onChange={onChange}
                    />
                )}
              /> */}
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
