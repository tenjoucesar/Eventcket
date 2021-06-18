import React from 'react';
import styled from 'styled-components';

import SecondaryText from 'components/SecondaryText';
import Oval from 'components/Oval';

const Container = styled.div`
  position: relative;
  padding-top: 127px;
`;

const AdjustedSecondaryText = styled(SecondaryText)`
  position: absolute;
  z-inde: 100;
`;

const AdjustedOval = styled(Oval)`
  left: -127px;
  top: 36px;
`;


const CreateContent = () => (
  <Container>
    <AdjustedOval />
    <AdjustedSecondaryText>Create Amazing Events all in One Place</AdjustedSecondaryText>

  </Container>
);

export default CreateContent;
