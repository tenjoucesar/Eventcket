import React from 'react';
import DatePicker from 'react-datepicker';

import { Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerContainer } from './styles';


const DatePickerComponent = ({ name, control, pathname }) => {
  const executeOnChange = (date, onChange) => onChange(date);

  return (
    <DatePickerContainer pathname={pathname}>
      <Controller
        control={control}
        name={name}
        render={({ field}) => (
          <>
            <DatePicker
              onChange={(e) => executeOnChange(e, field.onChange)}
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
