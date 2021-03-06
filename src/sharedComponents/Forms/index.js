import styled, { css } from 'styled-components';

const defaultStyles = css`
  @media ${({ theme }) => theme.minMMobile} {
    display: grid;
    align-items: center;
    grid-gap: 0px 15px;
  }

  @media ${({ theme }) => theme.minDesktop} {
    grid-gap: 0px 28px;
  }
`;

export const EventForm = styled.div`
  ${defaultStyles}
  grid-template-areas:
    'div-1'
    'div-2'
    'div-3'
    'div-4'
    'div-5'
    'div-6'
    'div-7'
    'div-8';
  grid-template-rows: repeat(8, auto);
  grid-template-columns: 1fr;
  @media ${({ theme }) => theme.minDesktop} {
    grid-template-areas:
      'div-1 div-1 div-1 div-1'
      'div-2 div-2 div-3 div-3'
      'div-4 div-4 div-6 div-7'
      'div-5 div-5 div-5 div-5'
      'div-8 div-8 div-8 div-8';
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const OrganizerForm = styled.div`
  ${defaultStyles}
  grid-template-areas:
    'div-1'
    'div-2'
    'div-3'
    'div-4'
    'div-5'
    'div-6';
  grid-template-rows: repeat(6, auto);
  grid-template-columns: 1fr;
  @media ${({ theme }) => theme.minDesktop} {
    max-width: 852px;
    grid-template-areas:
      'div-1 div-2'
      'div-3 div-4'
      'div-5 div-6';
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TiketsForm = styled.div`
  ${defaultStyles}
  grid-template-areas:
    'div-1'
    'div-2'
    'div-3'
    'div-4'
    'div-5';
  grid-template-rows: repeat(5, auto);
  grid-template-columns: 1fr;
  @media ${({ theme }) => theme.minDesktop} {
    max-width: 852px;
    grid-template-areas:
      'div-1 div-2'
      'div-3 div-5'
      'div-4 div-4';
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(2, 1fr);
  }
`;
