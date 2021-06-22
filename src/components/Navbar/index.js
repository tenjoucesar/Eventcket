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
} from './styles';

const Navbar = ({setMenuOpen, isMenuOpen}) => {
  const { device } = useContext(DeviceContext);
  const isLargeDesktop = device === 'largeDesktop';

  const Content = !isLargeDesktop && !isMenuOpen ?
    <StyledImg src={HamburgerIcon} onClick={() => setMenuOpen(true)}/>
  :
  <LinksContainer isOpen={isMenuOpen}>
    {Links.map(({ pathname, id, text }) => (
      <StyledLink to={{pathname: pathname}} key={id}>{text}</StyledLink>
    ))}
  </LinksContainer>;

  return (
    <Container>
      <TitleContainer>
        <Title>Evencket</Title>
      </TitleContainer>
      {Content}
    </Container>
  );
};

const Links = [
  { pathname: '/', id: 0, text: 'Home' },
  { pathname: '/', id: 1, text: 'About' },
  { pathname: '/', id: 2, text: 'Services' },
  { pathname: '/events/1', id: 3, text: 'Portfolio' },
  { pathname: '/login', id: 4, text: 'LOG IN' },
];

export default Navbar;
