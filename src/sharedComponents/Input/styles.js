import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  @media ${({ theme }) => theme.minDesktop} {
    margin-bottom: 18px;
  }
`;

export const Input = styled.input`
  border-color: ${({ theme }) => theme.white};
  border: 0.5px solid ${({ theme }) => theme.white};
  border-radius: 5px;
  background: #a1a1a1;
  padding-left: 10px;
  color: ${({ theme }) => theme.white};
  height: 33px;
  background: transparent;
  font-family: Roboto;
  font-size: 14px;
  ::placeholder {
    color: ${({ theme }) => theme.white};
  }
  @media ${({ theme }) => theme.minDesktop} {
    height: 50px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    padding-left: 16px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-family: Roboto;
  font-size: 11.55px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 4px;
  margin-left: 10px;
  text-transform: capitalize;
  min-height: 15px;
  line-height: 17.3px;
  letter-spacing: 0.15px;
`;
