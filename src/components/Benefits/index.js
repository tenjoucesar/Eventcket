import React from 'react';
import H2 from 'sharedComponents/H2';
import H3 from 'sharedComponents/H3';
import RedLine from 'sharedComponents/RedLine';
import {
  BenefitTextContainer,
  Container,
  BenefitContainer,
  InvertedBenefitContainer,
  SubTitle,
  BenefitParagraph,
  WineImg,
  EmailImg,
  ComputerImg,
  RocketImg
} from './styles';


const Benefits = () => (
  <Container>
    <H2>Our Benefits</H2>
    <RedLine />
    <BenefitContainer>
      <WineImg />
      <BenefitTextContainer>
        <H3>Benefit Name</H3>
        <SubTitle>SUBTITLE</SubTitle>
        <BenefitParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BenefitParagraph>
      </BenefitTextContainer>
    </BenefitContainer>
    <InvertedBenefitContainer>
      <EmailImg />
      <BenefitTextContainer>
        <H3>Benefit Name</H3>
        <SubTitle>SUBTITLE</SubTitle>
        <BenefitParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BenefitParagraph>
      </BenefitTextContainer>
    </InvertedBenefitContainer>
    <BenefitContainer>
      <ComputerImg />
      <BenefitTextContainer>
        <H3>Benefit Name</H3>
        <SubTitle>SUBTITLE</SubTitle>
        <BenefitParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BenefitParagraph>
      </BenefitTextContainer>
    </BenefitContainer>
    <InvertedBenefitContainer>
      <RocketImg />
      <BenefitTextContainer>
        <H3>Benefit Name</H3>
        <SubTitle>SUBTITLE</SubTitle>
        <BenefitParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BenefitParagraph>
      </BenefitTextContainer>
    </InvertedBenefitContainer>
  </Container>
);

export default Benefits;
