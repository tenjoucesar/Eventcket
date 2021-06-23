import { memo } from 'react';
import { Input, FormGroup } from './styles';
import Label from 'sharedComponents/Label';

const AppCheckbox = ({ label, placeholder, row, ...rest }) => (
  <FormGroup className={!row ? '' : 'row'}>
    {label && <Label>{label}</Label>}
    <Input type='checkbox' {...rest} />
  </FormGroup>
);

export default memo(AppCheckbox);
