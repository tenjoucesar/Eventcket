import React from 'react';
import styled from 'styled-components';
import Oval from 'sharedComponents/Oval';
import Paragraph from 'sharedComponents/Paragraph';
import Elipse from 'sharedComponents/Elipse';
import H2 from 'sharedComponents/H2';
import H3 from 'sharedComponents/H3';
import { MainButton } from 'sharedComponents/Buttons';
import AdministrationIcon from 'images/icons/administration-icon.png';
import PencilIcon from 'images/icons/pencil-icon.svg';
import MegaphoneIcon from 'images/icons/megaphone-icon.svg';
import RedLine from 'sharedComponents/RedLine';

const CreateContentSection = styled.section`
  padding: 0 21px;
`;

const Container = styled.div`
  position: relative;
  padding-top: 127px;
`;

const AdjustedH2 = styled(H2)`
  position: relative;
  z-index: 100;
  margin-bottom: 40px;
`;

const AdjustedOval = styled(Oval)`
  left: -127px;
  top: 36px;
`;

const LogosContainer = styled.div`
  padding-top: 142px;
`;

const Card = styled.div`
  border: 1px solid ${props => props.theme.lightGray};
  padding: 60px 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const AdjustedH3 = styled(H3)`
  margin: 30px auto;
`;

const AdjustedParagraph = styled(Paragraph)`
  margin: 0 auto 30px;
`;

const AdjustedBtn = styled(MainButton)`
  width: fit-content;
  font-size: 12px;
  padding: 12px 25px;
  margin: auto;
`;

const AdministrationImage = styled.img`
  width: 70px;
  height: 70px;
  align-self: center;
`;

const CreateContent = () => (
  <CreateContentSection>
    <Container>
      <AdjustedOval />
      <AdjustedH2>Create Amazing Events all in One Place</AdjustedH2>
    </Container>
    <RedLine />
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Paragraph>
    <LogosContainer>
      <Card>
        <Elipse>
          <img src={PencilIcon} />
        </Elipse>
        <AdjustedH3>
          CREATE YOUR EVENT
        </AdjustedH3>
        <AdjustedParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AdjustedParagraph>
        <AdjustedBtn>READ MORE</AdjustedBtn>
      </Card>
      <Card>
        <Elipse>
          <img src={MegaphoneIcon} />
        </Elipse>
        <AdjustedH3>
          PROMOTE EVENT
        </AdjustedH3>
        <AdjustedParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AdjustedParagraph>
        <AdjustedBtn>READ MORE</AdjustedBtn>
      </Card>
      <Card>
        <Elipse>
          <AdministrationImage src={AdministrationIcon} />
        </Elipse>
        <AdjustedH3>
          MANAGE EVENT
        </AdjustedH3>
        <AdjustedParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AdjustedParagraph>
        <AdjustedBtn>READ MORE</AdjustedBtn>
      </Card>
    </LogosContainer>
  </CreateContentSection>
);

export default CreateContent;
