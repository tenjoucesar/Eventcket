import styled from 'styled-components';

export default styled.textarea`
  padding: 12px 15px;
  height: 225px;
  border: 1px solid #bea4a4;
  border-radius: 5px;
  resize: none;
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 16px;
    padding: 13px 16px;
  }
`;
