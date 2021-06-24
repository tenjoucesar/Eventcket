import { memo } from 'react';
import { Select } from './styles';

const AppSelect = ({ label, placeholder, ...rest }) => (
  <Select {...rest}>
    <option value='' disabled selected hidden>
      {placeholder}
    </option>
  </Select>
);

export default memo(AppSelect);
