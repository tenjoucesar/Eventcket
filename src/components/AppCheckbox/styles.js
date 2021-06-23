import styled from 'styled-components';
import Form from 'sharedComponents/FormGroup';

export const FormGroup = styled(Form)`
  &.row {
    flex-direction: row;
    align-items: center;
    flex-direction: row-reverse;
    label {
      flex: 1;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }
`;

export const Input = styled.input`
  margin: 0;
`;
