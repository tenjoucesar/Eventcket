import { memo } from 'react';
import { FormGroup, Input, Label } from './styles';

const AppInput = ({ label, ...rest }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    <Input {...rest} />
  </FormGroup>
);

export default memo(AppInput);
