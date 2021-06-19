import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 24px;
  background: #ffc843;
  font-family: Avenir Next;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
`;
