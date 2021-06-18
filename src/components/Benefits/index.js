import React from 'react';
import styled from 'styled-components';
import H2 from 'sharedComponents/H2';
import RedLine from 'sharedComponents/RedLine';
import ComputerIcon from 'images/icons/computer-icon.png';
import EmailIcon from 'images/icons/email-icon.png';
import WineIcon from 'images/icons/wine-icon.png';
import RocketIcon from 'images/icons/rocket-icon.png';

const Container = styled.div`
  padding: 48px 28px 80px;
`;

const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 121px;
`;

const BenefitText = styled.h3`
  font-family: Avenir Next;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  color: ${props => props.theme.black};
  margin-bottom: 14px;
`;

const SubTitle = styled.p`
  font-family: Avenir Next;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 3px;
  color: #000000;
  margin: 0;
`;

const BenefitParagraph = styled.p`
  font-family: Avenir Next;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-top: 40px;
`;

const BenefitImg = styled.img`
  width: 160px;
  height: 138px;
  align-self: center;
  margin-bottom: 100px;
`;

const Benefits = () => (
  <Container>
    <H2>Our Benefits</H2>
    <RedLine />
    <BenefitContainer>
      <BenefitImg src={WineIcon}/>
      <BenefitText>Benefit Name</BenefitText>
      <SubTitle>SUBTITLE</SubTitle>
      <BenefitParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </BenefitParagraph>
    </BenefitContainer>
    <BenefitContainer>

      <BenefitImg src={EmailIcon} />
      <BenefitText>Benefit Name</BenefitText>
      <SubTitle>SUBTITLE</SubTitle>
      <BenefitParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </BenefitParagraph>
    </BenefitContainer>
    <BenefitContainer>
      <BenefitImg src={ComputerIcon} />
      <BenefitText>Benefit Name</BenefitText>
      <SubTitle>SUBTITLE</SubTitle>
      <BenefitParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </BenefitParagraph>
    </BenefitContainer>
    <BenefitContainer>
      <BenefitImg src={RocketIcon} />
      <BenefitText>Benefit Name</BenefitText>
      <SubTitle>SUBTITLE</SubTitle>
      <BenefitParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </BenefitParagraph>
    </BenefitContainer>
  </Container>
);

export default Benefits;
