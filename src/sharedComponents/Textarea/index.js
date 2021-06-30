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

const TextArea = ({
  name, register, required, ...props
}) => (
  <StyledTextarea
    {...props}
    {...name && register(name, { required: !!required })}
  />
);

export default TextArea;
