import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox } from './styles';
import Form from 'sharedComponents/FormGroup';
import Input from 'sharedComponents/Input';
import Label from 'sharedComponents/Label';
import Select from 'sharedComponents/Select';
import Textarea from 'sharedComponents/Textarea';
import DatePicker from 'sharedComponents/DatePicker';

const element = {
  select: Select,
  textarea: Textarea,
  checkbox: Checkbox,
  datePicker: DatePicker,
};

const FormElement = ({
  label, className, name, location: { pathname }, type, register, ...rest
}) => {
  const Element = element[type] || Input;
  const isCheckbox = type === 'checkbox';
  return (
    <Form className={`${className} ${isCheckbox ? 'checkbox' :""}`}>
      {label && <Label pathname={pathname}>{label}</Label>}
      <Element
        {...(isCheckbox && { type: 'checkbox' })}
        pathname={pathname}
        register={register}
        name={name}
        {...rest}
      />
    </Form>
)};

export default withRouter(memo(FormElement));
