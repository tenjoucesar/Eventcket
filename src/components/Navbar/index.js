import React, { useContext } from 'react';

import HamburgerIcon from 'images/icons/hamburger-icon.svg';
import { DeviceContext } from 'providers/Device';
import {
  Container,
  StyledImg,
  TitleContainer,
  Title,
  LinksContainer,
  StyledLink,
  ButtonLink
} from './styles';

const Navbar = () => {
  const { device } = useContext(DeviceContext);
  return (
    <Container>
      <TitleContainer>
        <Title>Evencket</Title>
      </TitleContainer>
      {device === 'largeDesktop' ? (
        <LinksContainer>
          <StyledLink to={{ pathname: '/' }}>Home</StyledLink>
          <StyledLink to={{ pathname: '/login' }}>About</StyledLink>
          <StyledLink to={{ pathname: '/login' }}>Services</StyledLink>
          <StyledLink to={{ pathname: '/login' }}>Portfolio</StyledLink>
          <ButtonLink>
            <StyledLink to={{ pathname: '/create-event' }}>CREATE EVENT</StyledLink>
          </ButtonLink>
        </LinksContainer>
      ) : (
        <StyledImg src={HamburgerIcon} />
      )}
    </Container>
  );
};

export default Navbar;
