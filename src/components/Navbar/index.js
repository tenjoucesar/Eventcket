import React from 'react';
import styled from 'styled-components';
import HamburgerIcon from 'images/icons/hamburger-icon.svg';


const Container = styled.div`
  height: 80px;
  background-color: #ffff;
  padding: 0 10px 0 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledImg = styled.img`
  align-self: center;
  width: 56px;
  height: 56px;
`;

const TitleContainer = styled.div`
  height: 90px;
  background-color: #FFC843;
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


const Navbar = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Evencket</Title>
      </TitleContainer>
      <StyledImg src={HamburgerIcon}/>
    </Container>
   );
}

export default Navbar;
