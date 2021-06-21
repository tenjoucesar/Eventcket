import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  margin: auto;
  padding-top: 15px;
  label {
    font-size: 15.04px;
    line-height: 22.6px;
    font-weight: bold;
    color: #000000;
    margin-left: 0;
  }
  input {
    ::placeholder {
      color: #000000;
    }
  }
`;

export const H4 = styled.h4`
  font-family: Roboto;
  font-size: 22.56px;
  line-height: 26.3px;
  text-transform: uppercase;
`;
