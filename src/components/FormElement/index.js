import React, { memo } from 'react';
import { Checkbox } from './styles';
import Form from 'sharedComponents/FormGroup';
import Input from 'sharedComponents/Input';
import Label from 'sharedComponents/Label';
import Select from 'sharedComponents/Select';
import Textarea from 'sharedComponents/Textarea';
import { withRouter } from 'react-router-dom';

const element = {
  select: Select,
  textarea: Textarea,
  checkbox: Checkbox,
};

const FormElement = React.forwardRef(({ label, className, location: { pathname }, type, ...rest }, ref) => {
  const Element = element[type] || Input;
  return (
    <Form className={className}>
      {label && <Label pathname={pathname}>{label}</Label>}
      <Element {...(type === 'checkbox' && { type: 'checkbox' })} pathname={pathname} ref={ref} {...rest} />
    </Form>
  );
});

export default withRouter(memo(FormElement));
