import styled from 'styled-components';

export const Container = styled.div`
  text-align: left;
  padding: 22px 20px 113px;
  background-color: ${({ theme }) => theme.white};

  @media ${({ theme }) => theme.minTablet} {
    padding: 75px 60px 138px
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    padding: 46px 35px 215px 68px;
    max-width: 1177px;
    margin-top: -177px;
    margin-bottom: 74px;
  }
`;

export const DesktopInfoContainer = styled.div`
  @media ${({ theme }) => theme.minLargeDesktop} {
    background: #F1F1F1;
    height: 892px;
    display: flex;
    justify-content: center;
  }
`;

export const BG = styled.div`
  background: linear-gradient(
    180deg,
    rgba(39, 36, 89, 0) 0%,
    rgba(39, 36, 89, 0.4) 100%),
  border-radius: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 459px;

  img {
    height: 459px;
    width: 100vw;
  }

  @media ${({ theme }) => theme.minTablet} {
    height: 558px;
    background-repeat: no-repeat;
    background-size: cover;

    img {
      height: 558px;
    }
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    height: 899px;
    background-repeat: no-repeat;
    background-size: cover;

    img {
      height: 899px;
    }
  }
`;
