import styled from 'styled-components';
import { MainButton } from 'sharedComponents/Buttons';

export const Seccion = styled.div`
  color: #000000;
  margin-top: 54px;
  min-height: auto;
  &:last-of-type {
    margin-bottom: 54px;
  }
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: 61px;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-top: 100px;
  }
`;

export const SeccionContent = styled.div`
  &.hidden {
    display: none;
    @media ${({ theme }) => theme.minLargeDesktop} {
      display: block;
    }
  }
`;

export const SeccionTitle = styled.h4`
  font-size: 22.56px;
  font-family: Roboto;
  line-height: 26.3px;
  margin-bottom: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  img {
    margin-left: 20px;
  }
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 24px;
    margin-bottom: 28px;
  }
  @media ${({ theme }) => theme.minDesktop} {
    margin-bottom: 31px;
  }
`;

export const Icon = styled.img`
`;

export const UpdateHeader = styled.h4`
  margin-top: 38px;
  font-family: Roboto;
  font-size: 15px;
  color: #666666;
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: 21px;
    margin-bottom: 5px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.minLargeDesktop} {
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;

export const UpdateSeccion = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 19px;
  @media ${({ theme }) => theme.minDesktop} {
    grid-template-columns: repeat(2, 210px);
  }
`;

export const UpdateArea = styled.div`
  height: 166px;
  border: ${({ theme }) => theme.appMainBorder};
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:first-of-type {
    border-style: dashed;
  }
`;

export const UpdateTitle = styled.span`
  font-family: Roboto;
  font-size: 15px;
  line-height: 22.6px;
  margin-top: 20px;
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 16px;
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
