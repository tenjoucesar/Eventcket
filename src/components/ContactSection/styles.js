import styled, { css } from 'styled-components';
import H3 from 'sharedComponents/H3';
import { MainButton } from 'sharedComponents/Buttons';

export const ContactSectionLabelStyles = css`
  font-family: Avenir Next Bold;
  font-size: 16px;
  line-height: 22px;
  color: #2C3241;
  margin-left: 0;
`;

export const InputStyles = css`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  padding: 5px 10px;
  font-family: Avenir Next;
  font-size: 14px;
  line-height: 36px;
  color: #2C3241;
  height: 36px;

  ::placeholder {
    color: #2C3241;
    opacity: 0.6;
  }

  @media ${({ theme }) => theme.minDesktop} {
    font-size: 18px;
  }
`;

export const Container = styled.section`
  padding: 54px 29px 189px;

  label {
    ${ContactSectionLabelStyles}
  }

  input {
    ${InputStyles}
    margin: 8px 0 21px 0;
    width: -webkit-fill-available;
  }

  textarea {
    ${InputStyles}
    margin: 8px 0 32px 0;
  }

  @media ${({ theme }) => theme.minTablet} {
    padding: 90px 20px 93px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media ${({ theme }) => theme.minDesktop} {
    padding: 90px 61px 93px;
  }
`;

export const AdjustedH3 = styled(H3)`
  color: ${({theme}) => theme.primaryDark};
  margin-bottom: 46px;
  margin-top: 0;

  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-bottom: 29px;
  }
`;

export const SubTitle = styled.h2`
  font-family: Gabriela Alt;
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
  color: ${({theme}) => theme.primaryDark};
  margin-bottom: 75px;

  span {
    color: #ED9732;
  }

  @media ${({ theme }) => theme.minLDesktop} {
    margin-top: 0;
    font-size: 90px;
    line-height: 100px;
  }
`;

export const Input = styled.input`
  ${InputStyles}
`;

export const Textarea = styled.textarea`

`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdjustedMainButton = styled(MainButton)`
  font-weight: bold;
  font-size: 18px;
  line-height: 13px;
  min-width: 373px;
  text-transform: none;
  height: 48px;
  font-family: Avenir Next Bold;
`;

export const TextContainer = styled.div`
  @media ${({ theme }) => theme.minDesktop} {
    max-width: 373px;
    padding-right: 100px;
  }

  @media ${({ theme }) => theme.minLDesktop} {
    max-width: 600px;
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    padding-right: 130px;
  }
`;

export const FormContainer = styled.div`
  @media ${({ theme }) => theme.minLargeDesktop} {
    width: 441px;
  }
`;
