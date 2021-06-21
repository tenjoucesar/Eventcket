import React from 'react';
import styled from 'styled-components';
import ExpandMore from 'images/icons/expand-more.png';

const StyledSelect = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.32);
  background-image: url(${ExpandMore});
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding-left: 17px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
  height: 50px;
  cursor: pointer;
  width: 186px;
  margin-top: 6px;
  appearance: none;
  background-repeat: no-repeat;
  background-position: 88% center;
  outline: none;
  option {
    border-radius: 4px;
    box-shadow: 0 2px 7px 0 rgba(161, 160, 179, 0.2);
  }
`;

const renderSelectOption = (option, i) => (
  <option key={i} value={option.value}>{option.name}</option>
);

export const DropDownForm = React.forwardRef(({
  placeholder, disabled, options, ...props
}, ref) => (
  <>
    <StyledSelect
      {...props}
      ref={ref}
      placeholder={placeholder}
    >
      <option disabled={disabled} value="">{placeholder}</option>
      {options.map(renderSelectOption)}
    </StyledSelect>
  </>
));
