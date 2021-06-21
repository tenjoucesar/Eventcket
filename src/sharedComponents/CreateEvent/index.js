import { memo } from 'react';
import { AdjustParagrath, Main, MainContent, OvalImg } from './styles';
import RedLine from 'sharedComponents/RedLine';
import H2 from 'sharedComponents/H2';

const CreateEvent = () => (
  <Main>
    <OvalImg />
    <MainContent>
      <H2>Create Amazing Events all in One Place</H2>
      <RedLine />
      <AdjustParagrath>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </AdjustParagrath>
    </MainContent>
  </Main>
);

export default memo(CreateEvent);
