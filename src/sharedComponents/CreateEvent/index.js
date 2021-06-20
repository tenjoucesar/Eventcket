import { memo } from 'react';
import { AdjustParagrath, Main, MainContent, MainTitle, OvalImg } from './styles';
import RedLine from 'sharedComponents/RedLine';

const CreateEvent = () => (
  <Main>
    <OvalImg />
    <MainContent>
      <MainTitle>Create Amazing Events all in One Place</MainTitle>
      <RedLine />
      <AdjustParagrath>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </AdjustParagrath>
    </MainContent>
  </Main>
);

export default memo(CreateEvent);
