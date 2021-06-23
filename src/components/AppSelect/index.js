import { memo } from 'react';
import FormGroup from 'sharedComponents/FormGroup';
import Label from 'sharedComponents/Label';
import { Select } from './styles';

const AppSelect = ({ label, placeholder, ...rest }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    <Select {...rest}>
      <option value='' disabled selected hidden>
        {placeholder}
      </option>
    </Select>
  </FormGroup>
);

export default memo(AppSelect);
