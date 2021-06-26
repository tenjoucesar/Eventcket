import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox } from './styles';
import Form from 'sharedComponents/FormGroup';
import Input from 'sharedComponents/Input';
import Label from 'sharedComponents/Label';
import Select from 'sharedComponents/Select';
import Textarea from 'sharedComponents/Textarea';

const element = {
  select: Select,
  textarea: Textarea,
  checkbox: Checkbox,
};

const FormElement = React.forwardRef(({ label, className, location: { pathname }, type, ...rest }, ref) => {
  const Element = element[type] || Input;
  const isCheckbox = type === 'checkbox';
  return (
    <Form className={`${className} ${isCheckbox  && 'checkbox'}`}>
      {label && <Label pathname={pathname}>{label}</Label>}
      <Element 
        {...(isCheckbox && { type: 'checkbox' })} 
        pathname={pathname} 
        ref={ref} 
        {...rest} />
    </Form>
  );
});

export default withRouter(memo(FormElement));
