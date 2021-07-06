import React from 'react';
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

const DatePickerComponent = ({ name, control }) => {
  const executeOnChange = (date, onChange) => onChange(date);

  return (
    <DatePickerContainer>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <DatePicker 
              onChange={e => executeOnChange(e, field.onChange)} 
              selected={field.value} 
            />
            <DatePicker
              selected={field.value}
              onChange={date => executeOnChange(date, field.onChange)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption='Time'
              dateFormat='h:mm aa'
            />
          </>
        )}
      />
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
