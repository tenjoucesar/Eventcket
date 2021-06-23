import styled from 'styled-components';

export default styled.input`
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
