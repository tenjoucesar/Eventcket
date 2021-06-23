import styled from 'styled-components';
import { MainButton } from 'sharedComponents/Buttons';

export const Container = styled.form`
  width: 92%;
  margin: auto;
  padding-bottom: 260px;
  label,
  input,
  select,
  input::placeholder {
    color: #666666;
  }
  label {
    margin-left: 0;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 11px;
    @media ${({ theme }) => theme.minDesktop} {
      font-size: 16px;
      margin-bottom: 6px;
    }
  }
  input,
  select {
    border: 1px solid #bea4a4;
    height: 47px;
    padding-left: 15px;
    font-size: 14px;
    @media ${({ theme }) => theme.minDesktop} {
      height: 50px;
      font-size: 16px;
      /* */
      margin-bottom: 8px;
    }
  }
  input[type='checkbox'] {
    height: 22px;
  }

  @media ${({ theme }) => theme.minDesktop} {
    width: 88%;
  }
`;

export const Button = styled(MainButton)`
  margin-top: 62px;
  margin-bottom: 15px;
  width: 100%;
`;
