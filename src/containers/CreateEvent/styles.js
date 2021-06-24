import styled from 'styled-components';
import { MainButton } from 'sharedComponents/Buttons';

export const Container = styled.form`
  width: 92%;
  margin: auto;
  padding-bottom: 260px;
  @media ${({ theme }) => theme.minDesktop} {
    width: 88%;
  }
`;

export const Button = styled(MainButton)`
  margin-top: 62px;
  margin-bottom: 15px;
  width: 100%;
`;
