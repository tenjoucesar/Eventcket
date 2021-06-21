import styled, { css } from 'styled-components';
import { MainButton } from 'sharedComponents/Buttons';
import Smarthphone from '../../images/smartphone.webp';
import Smarthphone2x from '../../images/smartphone@2x.webp';
import Smarthphone3x from '../../images/smartphone@3x.png';

const basicImgBackground = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Smarthphone});
  width: 100%;
  @media ${({ theme }) => theme.minDesktop} {
    background-image: url(${Smarthphone2x});
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    background-image: url(${Smarthphone3x});
  }
`;

export const MainContent = styled.div`
  background-image: none;
  overflow: hidden;
  ${basicImgBackground}
  @media ${({ theme }) => theme.minDesktop} {
    height: 756px;
    display: grid;
    grid-template-columns: 50%;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    height: 840px;
  }
`;

export const ImageContainer = styled.div`
  height: 289px;
  ${basicImgBackground};
  flex: 1;
  @media ${({ theme }) => theme.minDesktop} {
    display: none;
  }
`;

export const FormContainer = styled.form`
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  height: 580px;
  padding: 20px;
  justify-content: center;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);

  @media ${({ theme }) => theme.minDesktop} {
    height: auto;
    padding: 28px;
    padding-bottom: 50px;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    padding: 40px 117px;
    padding-bottom: 40px;
  }
`;

export const FormTitle = styled.h3`
  font-size: 30px;
  line-height: 20.5px;
  text-transform: capitalize;
  margin-bottom: 7px;
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 24px;
    letter-spacing: -0.06px;
    line-height: 28px;
    margin-bottom: 4px;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 12px;
  line-height: 14.6px;
  margin: 0;
  margin-bottom: 24px;
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 14px;
    letter-spacing: -0.05px;
    line-height: 20px;
    margin-bottom: 40px;
  }
`;

export const ConditionsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 18px;
  width: 100%;
  align-items: center;
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: 15px;
    margin-bottom: 25px;
  }
`;

export const InputCheckBox = styled.input`
  margin: 0;
  height: 13px;
  @media ${({ theme }) => theme.minDesktop} {
    height: 18px;
  }
`;

export const FormButton = styled(MainButton)`
  width: 325px;
  height: 29.26px;
  font-size: 10px;
  font-family: Roboto;
  margin-bottom: 18px;
  @media ${({ theme }) => theme.minDesktop} {
    width: 100%;
    height: 40px;
    font-size: 14px;
    letter-spacing: 1.24px;
    line-height: 16px;
  }
`;

export const Span = styled.span`
  font-size: 10.24px;
  margin-left: 5px;
  strong {
    margin-left: 5px;
    color: #e73587;
  }
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 14px;
    letter-spacing: -0.05px;
    line-height: 20px;
  }
`;
