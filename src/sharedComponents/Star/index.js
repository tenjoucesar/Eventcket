import React from 'react';

import GoldStart from 'images/icons/gold-star.png';
import GreyStart from 'images/icons/grey-star.png';
import styled from 'styled-components';

const StyledStart = styled.img`
  content: url(${({ filled }) => filled ? GoldStart : GreyStart});
  margin-right: 6px;
`;

const Start = ({calification}) => (
  <>
    <StyledStart filled={calification >= 1}/>
    <StyledStart filled={calification >= 2}/>
    <StyledStart filled={calification >= 3}/>
    <StyledStart filled={calification >= 4}/>
    <StyledStart filled={calification >= 5}/>
  </>
);

export default Start;
