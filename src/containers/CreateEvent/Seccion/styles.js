import styled from 'styled-components';

export const Seccion = styled.div`
  color: #000000;
  margin-top: 54px;
  min-height: auto;
  &:last-of-type {
    margin-bottom: 54px;
  }
  @media ${({ theme }) => theme.minDesktop} {
    margin-top: 60px;
  }
`;

export const SeccionContent = styled.div`
  &.hidden {
    display: none;
    @media ${({ theme }) => theme.minDesktop} {
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
`;

export const Icon = styled.img`
  @media ${({ theme }) => theme.minDesktop} {
    &.arrow {
      display: none;
    }
  }
`;

export const InputContainer = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 0px 15px;
  &.event {
  }
`;

export const UpdateHeader = styled.h4`
  margin-top: 38px;
  font-family: Roboto;
  font-size: 15px;
  color: #666666;
`;

export const UpdateSeccion = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 19px;
`;

export const UpdateArea = styled.div`
  height: 166px;
  border: 1px solid #bea4a4;
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
`;