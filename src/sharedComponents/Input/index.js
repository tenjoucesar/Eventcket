import React from 'react';
import styled, { css } from 'styled-components';
import pageStyles from 'themes/pageStyles';

const createEventStyles = css`
  color: #000000;
  border: ${({ theme }) => theme.appMainBorder};
  height: 47px;
  padding-left: 15px;
  font-size: 14px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }

  @media ${({ theme }) => theme.minDesktop} {
    height: 50px;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const loginStyles = css`
  color: ${({ theme }) => theme.white};
  ::placeholder {
    color: ${({ theme }) => theme.white};
  }
`;

const LandingStyles = css`
  ${loginStyles}
`;

const StyledInput = styled.input`
  border-color: ${({ theme }) => theme.white};
  border: 0.5px solid ${({ theme }) => theme.white};
  border-radius: 5px;
  padding-left: 10px;
  height: 33px;
  background: transparent;
  font-family: Roboto;
  font-size: 14px;

  @media ${({ theme }) => theme.minDesktop} {
    height: 50px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    padding-left: 16px;
  }

  ${({ pathname }) => pageStyles(loginStyles, createEventStyles, LandingStyles)[pathname]}
`;

const Input = ({
  className, pathname, name, register, placeholder, required,...rest
}) => (
  <StyledInput
    {...name && register(name, { required: !!required })}
    placeholder={placeholder}
    className={className}
    pathname={pathname}
    {...rest}
  />
);

export default Input;
