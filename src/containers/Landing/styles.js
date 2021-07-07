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
  margin: 0 0 46px;

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
  display: flex;
  flex-direction: column;

  @media ${({theme}) => theme.maxTablet} {
    align-items: center;
  }

  @media ${({theme}) => theme.minTablet} {
    flex-direction: row;
    padding: 75px 41px;
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
