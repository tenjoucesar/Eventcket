import { memo } from 'react';
import { FormGroup, Input, Label } from './styles';

const AppInput = ({ label, ...rest }) => {
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </FormGroup>
  );
};

export default memo(AppInput);
