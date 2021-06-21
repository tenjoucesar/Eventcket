import React from 'react';
import Elipse from 'sharedComponents/Elipse';
import AdministrationIcon from 'images/icons/administration-icon.png';
import PencilIcon from 'images/icons/pencil-icon.svg';
import MegaphoneIcon from 'images/icons/megaphone-icon.svg';
import RedLine from 'sharedComponents/RedLine';

import {
  CreateContentSection,
  Container,
  AdjustedH2,
  AdjustedOval,
  RelativeParagraph,
  Card,
  CardsContainer,
  AdjustedH4,
  AdjustedParagraph,
  AdjustedBtn,
  AdministrationImage
} from './styles';

const CreateContent = () => (
  <CreateContentSection>
    <Container>
      <AdjustedOval />
      <AdjustedH2>Create Amazing Events all in One Place</AdjustedH2>
      <RedLine />
      <RelativeParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </RelativeParagraph>
    </Container>
    <CardsContainer>
      <Card>
        <Elipse>
          <img src={PencilIcon} />
        </Elipse>
        <AdjustedH4>
          CREATE YOUR EVENT
        </AdjustedH4>
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
        <AdjustedH4>
          PROMOTE EVENT
        </AdjustedH4>
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
        <AdjustedH4>
          MANAGE EVENT
        </AdjustedH4>
        <AdjustedParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AdjustedParagraph>
        <AdjustedBtn>READ MORE</AdjustedBtn>
      </Card>
    </CardsContainer>
  </CreateContentSection>
);

export default CreateContent;
