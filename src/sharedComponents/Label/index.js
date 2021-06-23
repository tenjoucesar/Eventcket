import styled from 'styled-components';

export default styled.label`
  font-weight: bold;
  font-family: Roboto;
  font-size: 11.55px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 4px;
  margin-left: 10px;
  text-transform: capitalize;
  min-height: 15px;
  line-height: 17.3px;
  letter-spacing: 0.15px;
`;
