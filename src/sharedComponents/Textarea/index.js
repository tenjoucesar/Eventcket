import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  padding: 12px 15px;
  height: 225px !important;
  border: ${({ theme }) => theme.appMainBorder};
  border-radius: 5px;
  resize: none;
  @media ${({ theme }) => theme.minDesktop} {
    font-size: 16px;
    padding: 13px 16px;
  }
`;

const TextArea = (props) => <StyledTextarea {...props} />

export default TextArea;
