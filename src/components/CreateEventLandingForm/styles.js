import styled from 'styled-components';
import { MainButton } from 'sharedComponents/Buttons';

export const Form = styled.form`
  border-radius: 23.11px;
  padding: 20px 30px;
  margin-top: 57px;
  background: rgba(162, 162, 162, 0.8);
  backdrop-filter: blur(15.6768px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 27px 35px;
  width: 323px;

  @media ${({theme}) => theme.minTablet} {
    margin-top: 0;
  }

  @media ${({theme}) => theme.minDesktop} {
    padding: 32px 46px 45px;
    width: 419px;
  }

  @media ${({theme}) => theme.minLDesktop} {
    max-width: 480px;
    width: 408px;
  }
`;

export const QuestionsContainer = styled.div`
  padding: 13px 18px 0;
`;

export const FormButton = styled(MainButton)`
  background: linear-gradient(0deg, #FFC843, #FFC843);
  border-radius: 72.897px;
  width: 260px;
  padding: 0;

  a {
    font-weight: 500;
    color: inherit;
    text-decoration: none;
  }

  @media ${({theme}) => theme.minTablet} {
    margin-top: 16px;
  }

  @media ${({theme}) => theme.minDesktop} {
    width: 330px;
  }
`;
