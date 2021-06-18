import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HamburgerIcon from 'images/icons/hamburger-icon.svg';
import { DeviceContext } from 'providers/Device';
import { MainButton } from 'components/Buttons';


const Container = styled.div`
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

const StyledImg = styled.img`
  align-self: center;
  width: 56px;
  height: 56px;
`;

const TitleContainer = styled.div`
  height: 90px;
  background-color: ${props => props.theme.primaryColor};
  padding-bottom: 5px;
  width: 222px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 39.3px;
  line-height: 30.5px;
  color: white;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  a:not(:last-child) {
    margin-left: 50px;
  }
`;

const StyledLink = styled(Link)`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-decoration: none;
  color: ${props => props.theme.black};

  &:active {
    color: ${props => props.theme.black};
  }
`;

const ButtonLink = styled(MainButton)`
  margin-left: 50px;

  a {
    font-family: Avenir Next;
    color: ${props => props.theme.white};
  }
`;


const Navbar = () => {
  const { device } = useContext(DeviceContext)
  return (
    <Container>
      <TitleContainer>
        <Title>Evencket</Title>
      </TitleContainer>
      {device === 'largeDesktop'
        ?
        <LinksContainer>
          <StyledLink to={{ pathname: '/' }}>Home</StyledLink>
          <StyledLink to={{ pathname: '/login' }}>About</StyledLink>
          <StyledLink to={{ pathname: '/login' }}>Services</StyledLink>
          <StyledLink to={{ pathname: '/login' }}>Portfolio</StyledLink>
          <ButtonLink>
            <StyledLink to={{ pathname: '/create-event' }}>CREATE EVENT</StyledLink>
          </ButtonLink>
        </LinksContainer>
        :
          <StyledImg src={HamburgerIcon} />
      }
    </Container>
   );
}

export default Navbar;
