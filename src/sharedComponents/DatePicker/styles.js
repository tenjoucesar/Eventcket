import styled, { css } from 'styled-components';
import { InputStyles } from 'sharedComponents/Input/styles';
import pageStyles from 'themes/pageStyles';

const landingStyles = css`
  @media ${({theme}) => theme.largeMobile} {
    .react-datepicker__input-container {
      max-width: 186px;
    }
  }

  @media ${({theme}) => theme.minDesktop} {
    .react-datepicker__input-container {
      width: 191px;
    }

    .react-datepicker-wrapper {
      width: 191px;
    }

    .react-datepicker__input-container input {
      width: 171px;
    }
  }
`;

const createEventStyles = css`
  .react-datepicker__input-container input {
    color: #666666;
    border: 1px solid #bea4a4;
    height: 47px;
    width: -webkit-fill-available;

    @media(min-width: 992px) and (max-width: 1110px) {
      width: 153px !important;
    }
  }
`;

export const DatePickerContainer = styled.div`
  display: inline-flex;

  //This fix the issue on safari
  .react-datepicker__navigation-icon {
    width: 0;
  }

  .react-datepicker-wrapper {
    width: -webkit-fill-available;
  }

  .react-datepicker-wrapper:first-child {
    margin-right: 22px;
  }

  .react-datepicker__input-container input {
    ${InputStyles}
    width: 137px;
  }

  @media ${({theme}) => theme.minDesktop} {
    .react-datepicker-wrapper:first-child {
      margin-right: 28px;
    }
  }

  ${({ pathname }) => pageStyles('', createEventStyles, landingStyles)[pathname]}
`;
