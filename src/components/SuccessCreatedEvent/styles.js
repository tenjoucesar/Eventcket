import styled from 'styled-components';
import { MainButton } from 'sharedComponents/Buttons';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-top: 140px;
  }
`;

export const SuccessMessage = styled.p`
  font-family: Avenir Next;
  font-size: 24px;
  line-height: 39px;
  letter-spacing: 1.36px;
  color: #4CB43B;

  @media ${({ theme }) => theme.minTablet} {
    line-height: 49px;
    margin-bottom: 50px;
  }
`;

export const AdjustedMainButton = styled(MainButton)`
  width: 100%;
  max-width: 461px;
  height: 61px;
  font-size: 21.78px;
  line-height: 33px;
  font-family: Avenir Next Bold;
  text-transform: capitalize;

  &:first-child {
    margin-right: 30px;
  }

  @media ${({ theme }) => theme.minTablet} {
    &:first-child {
      margin-right: 50px;
    }
  }

  @media ${({ theme }) => theme.minLDesktop} {
    &:first-child {
      margin-right: 100px;
    }
  }
`;
