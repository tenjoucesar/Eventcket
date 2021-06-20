import styled from 'styled-components';
import Oval from '../Oval';
import H2 from '../H2';
import Paragraph from '../Paragraph';

export const Main = styled.div`
  position: relative;
  padding-top: 120px;
  padding-bottom: 100px;
  width: 100%;
  @media ${({ theme }) => theme.minDesktop} {
    padding-top: 80px;
    padding-bottom: 180px;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-top: 79px;
    margin-bottom: 100px;
  }
`;

export const OvalImg = styled(Oval)`
  left: -127px;
  position: absolute;
  top: 40px;
  z-index: -1;
  @media ${({ theme }) => theme.minDesktop} {
    top: 160px;
  }
`;

export const MainTitle = styled(H2)``;

export const AdjustParagrath = styled(Paragraph)`
  width: 90%;
  margin: auto;
`;

export const MainContent = styled.div`
  @media ${({ theme }) => theme.minDesktop} {
    width: 93%;
    margin: auto;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    max-width: 800px;
  }
`;
