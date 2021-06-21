import styled from 'styled-components';
import DjBG from 'images/dj-hand.jpeg';
import { MainButton } from 'sharedComponents/Buttons';

export const TextContainer = styled.div`
  padding: 0 6px;

  @media ${({theme}) => theme.minDesktop} {
    margin-right: 96px;
  }

  @media ${({theme}) => theme.minLDesktop} {
    margin-right: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-family: Gabriela Alt;
  font-size: 66.7638px;
  line-height: 69px;
  color: ${props => props.theme.white};
  max-width: 363px;
  margin: auto;
  margin-bottom: 46px;

  @media ${({theme}) => theme.minTablet} {
    margin-bottom: 71px;
    font-size: 70px;
    line-height: 92px;
  }

  @media ${({theme}) => theme.minLDesktop} {
    font-size: 89px;
    line-height: 92px;
    margin-bottom: 50px;
    max-width: 482px;
  }
`;

export const Main = styled.main`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 200, 67, 0.7) 100%), url(${DjBG});
  background-blend-mode: color, normal;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  padding: 99px 27px 90px;

  @media ${({theme}) => theme.minTablet} {
    padding: 75px 41px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media ${({theme}) => theme.minDesktop} {
    padding: 75px 60px;
    justify-content: center
  }
`;

export const LearnMoreButton = styled(MainButton)`
  padding: 12px 30px;

  @media ${({theme}) => theme.minTablet} {
    width: 190.71px;
    height: 57.54px;
    font-weight: 600;
    font-size: 16.5px;
    line-height: 23px;
  }
`;

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

  @media ${({theme}) => theme.minTablet} {
    margin-top: 0;
  }

  @media ${({theme}) => theme.minDesktop} {
    padding: 26px 8px 39px;
    width: 419px;
  }

  @media ${({theme}) => theme.minLDesktop} {
    max-width: 480px;
    width: 408px;
    padding: 32px 46px 45px;
  }
`;

export const QuestionsContainer = styled.div`
  padding: 13px 18px 0;
  width: 100%;
`;

export const FormButton = styled(MainButton)`
  background: linear-gradient(0deg, #FFC843, #FFC843);
  border-radius: 72.897px;
  width: 260px;
  padding: 0;
  height: 32px;
`;