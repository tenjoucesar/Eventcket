import React from 'react';
import { Select } from './styles';

const AppSelect = React.forwardRef(({ label, placeholder, ...rest }, ref) => (
  <Select ref={ref} {...rest}>
    <option 
      value='' 
      disabled 
      selected 
      hidden>
      {placeholder}
    </option>
  </Select>
));

export default AppSelect;
