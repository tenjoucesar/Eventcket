import styled from 'styled-components';
import Oval from 'sharedComponents/Oval';
import Paragraph from 'sharedComponents/Paragraph';
import H2 from 'sharedComponents/H2';
import H4 from 'sharedComponents/H4';
import { MainButton } from 'sharedComponents/Buttons';

export const CreateContentSection = styled.section`
  padding: 0 21px;

  @media ${({ theme }) => theme.minDesktop} {
    padding: 0 56px 100px;
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    padding-bottom: 55px;
  }
`;

export const Container = styled.div`
  position: relative;
  padding-top: 95px;

  @media ${({ theme }) => theme.minDesktop} {
    padding-top: 134px;
  }
`;

export const AdjustedH2 = styled(H2)`
  position: relative;
  z-index: 100;
  margin-bottom: 40px;
  margin-top: 0;
`;

export const AdjustedOval = styled(Oval)`
  left: -127px;
  top: 36px;

  @media ${({ theme }) => theme.minTablet} {
    top: 127px;
    left: -220px;
  }

  @media ${({ theme }) => theme.minDesktop} {
    top: 169px;
  }
`;

export const RelativeParagraph = styled(Paragraph)`
  @media ${({ theme }) => theme.minTablet} {
    position: relative;
  }

  @media ${({ theme }) => theme.minDesktop} {
    max-width: 961px;
    margin: auto;
  }
`;

export const Card = styled.div`
  border: 1px solid ${props => props.theme.lightGray};
  padding: 42px 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.minDesktop} {
    padding: 21px 32px;
    margin-bottom: 0;
    max-width: 208px;

    img {
      width: 109px;
      height: 109px;
      align-self: center;
    }
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    padding: 48px 20px;
    max-width: 309px;
  }
`;

export const CardsContainer = styled.div`
  padding-top: 63px;

  @media ${({ theme }) => theme.minTablet} {
    display: flex;
    justify-content: center;

    ${Card}:nth-child(1),
    ${Card}:nth-child(2) {
      margin-right: 10px;
    }
  }

  @media ${({ theme }) => theme.minDesktop} {
    padding-top: 100px;

    ${Card}:nth-child(1),
    ${Card}:nth-child(2) {
      margin-right: 30px;
    }
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    padding-top: 200px;
  }
`;

export const AdjustedH4 = styled(H4)`
  margin: 30px auto;
`;

export const AdjustedParagraph = styled(Paragraph)`
  margin: 0 auto 30px;
`;

export const AdjustedBtn = styled(MainButton)`
  width: fit-content;
  font-size: 12px;
  padding: 12px 25px;
  margin: auto;
  font-weight: 600;
  line-height: 16px;
`;

export const AdministrationImage = styled.img`
  width: 70px;
  height: 70px;
  align-self: center;

  @media ${({ theme }) => theme.minDesktop} {
    width: 109px;
    height: 109px;
  }
`;

