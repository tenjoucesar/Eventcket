import styled from 'styled-components';
import { default as Image } from '../../sharedComponents/Oval';
import H2 from '../../sharedComponents/H2';
import Paragraph from '../../sharedComponents/Paragraph';

export const Main = styled.div`
  position: relative;
  padding-top: 15px;
  padding-bottom: 86px;
  width: 100%;
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: 70px;
    margin-bottom: 85px;
  }
`;

export const Oval = styled(Image)`
  left: -127px;
  position: absolute;
  top: 40px;
  z-index: -1;
`;

export const MainTitle = styled(H2)`
  margin-top: 80px;
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: -25px;
  }
`;

export const AdjustParagrath = styled(Paragraph)`
  width: 90%;
  margin: auto;
`;

export const MainContent = styled.div`
  @media ${({ theme }) => theme.minDesktop} {
    width: 90%;
    margin: auto;
  }
`;
