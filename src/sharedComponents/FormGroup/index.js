import styled, { css } from 'styled-components';

const basicCheckboxStyle = css`
  flex-direction: row;
  align-items: center;
  flex-direction: row-reverse;
  label {
    flex: 1;
    margin-bottom: 0;
    margin-left: 9px;
  }
`;

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;

  @media ${({ theme }) => theme.minDesktop} {
    margin-bottom: 18px;
  }
  &.row {
    ${basicCheckboxStyle}
    margin-top:8px;
    margin-bottom: 18px;
  }

  &.checkbox {
    @media ${({ theme }) => theme.minDesktop} {
      ${basicCheckboxStyle}
    }
    @media ${({ theme }) => theme.minLargeDesktop} {
      margin-bottom: 22px;
    }
  }

  &.div-1 {
    grid-area: div-1;
  }
  &.div-2 {
    grid-area: div-2;
  }
  &.div-3 {
    grid-area: div-3;
  }
  &.div-4 {
    grid-area: div-4;
  }
  &.div-5 {
    grid-area: div-5;
  }
  &.div-6 {
    grid-area: div-6;
  }
  &.div-7 {
    grid-area: div-7;
  }
  &.div-8 {
    grid-area: div-8;
  }
`;
