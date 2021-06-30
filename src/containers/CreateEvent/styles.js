import styled from 'styled-components';
import { MainButton } from 'sharedComponents/Buttons';

export const Container = styled.div`
  width: 92%;
  margin: auto;
  padding-bottom: 260px;
  min-height: calc(100vh - 276px);
  @media ${({ theme }) => theme.minDesktop} {
    width: 88%;
    max-width: 1155px;
    padding-bottom: 72px;
  }
`;

export const Button = styled(MainButton)`
  margin-bottom: 15px;
  width: 100%;
  max-width: 425px;
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: 25px;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-top: 15px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 62px;
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: 39px;
    display: flex;
    flex-direction: column-reverse;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-top: 50px;
  }
`;
