import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MainButtonStyles } from 'sharedComponents/Buttons';

export const Container = styled.div`
  height: 80px;
  background-color: ${props => props.theme.white};
  padding: 0 20px 0 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  @media ${props => props.theme.minTablet} {
    padding: 0 50px 0 60px;
  }

  @media ${props => props.theme.minLargeDesktop} {
    padding: 0 45px 0 52px;
  }
`;

export const StyledImg = styled.img`
  align-self: center;
  width: 56px;
  height: 56px;
`;

export const TitleContainer = styled.div`
  height: 90px;
  background-color: ${props => props.theme.primaryColor};
  padding-bottom: 5px;
  width: 222px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Title = styled.h1`
  font-size: 39.3px;
  line-height: 30.5px;
  color: white;
`;

const MenuMobileStyles = css`
  background: linear-gradient(
    0deg,
    rgb(240, 240, 241) 0%,
    rgb(254, 254, 254) 6%,
    rgb(254, 254, 254) 100%
  );
  border: 1px solid rgb(231, 235, 240);
  box-shadow: rgb(161 160 179) 0px 2px 7px 0px;
  height: 100vh;
  top: 0px;
  right: 0px;
  position: fixed;
  width: 215px;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;


export const LinksContainer = styled.div`
  a:last-child {
    ${MainButtonStyles}
    font-family: Avenir Next;
    color: ${({theme}) => theme.white};
    display: flex;
    align-items: center;
    width: fit-content;
  }

  @media ${({theme}) => theme.maxLargeDesktop} {
    ${({isOpen}) => isOpen && MenuMobileStyles}
  }

  @media ${({theme}) => theme.minLargeDesktop} {
    display: flex;
    align-items: center;

    a {
      margin-left: 50px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-decoration: none;
  color: ${props => props.theme.black};
  margin: 20px;

  &:active {
    color: ${props => props.theme.black};
  }

  @media ${({theme}) => theme.minLargeDesktop} {
    margin: 0;
  }
`;
