import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  @media ${({ theme }) => theme.minDesktop} {
    margin-bottom: 18px;
  }
  .div-1 {
    grid-area: 1;
  }
  .div-2 {
    grid-area: 2;
  }
  .div-3 {
    grid-area: 3;
  }
  .div-4 {
    grid-area: 4;
  }
  .div-5 {
    grid-area: 5;
  }
`;
