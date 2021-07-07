import styled, { css } from 'styled-components';
import { InputStyles } from 'sharedComponents/Input/styles';
import pageStyles from 'themes/pageStyles';

const landingStyles = css`
  @media ${({ theme }) => theme.largeMobile} {
    .react-datepicker__input-container {
      max-width: 186px;
    }
  }

  @media ${({ theme }) => theme.minDesktop} {
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
  @-moz-document url-prefix() {
    display: flex;
  }

  //Fixes trinagle at time picker
  .react-datepicker--time-only .react-datepicker__triangle {
    left: -36% !important;
  }

  .react-datepicker__input-container {
    display: flex;
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    color: #666666;
    border: 1px solid #bea4a4;
    height: 47px;
    width: 100%;

    // Built as a fix for Safari
    @media (min-width: 992px) and (max-width: 1110px) {
      width: 153px !important;
    }

    @media ${({ theme }) => theme.minDesktop} {
      height: 50px;
    }
  }
  @media ${({ theme }) => theme.maxMMobile} {
    .react-datepicker-wrapper:first-child {
      margin-right: 18px;
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

  //Fixes trinagle at time picker
  .react-datepicker--time-only .react-datepicker__triangle {
    left: -27% !important;
  }

  .react-datepicker__input-container input {
    ${InputStyles}
    width: 137px;

    :focus {
      outline: none;
      border: 1.46px solid #ffc843;
    }
  }

  @media ${({ theme }) => theme.maxMMobile} {
    .react-datepicker__input-container {
      width: 80%;
    }

    .react-datepicker__input-container input {
      width: 111%;
    }

    .react-datepicker-wrapper:first-child {
      margin-right: 7px;
    }

    //Fixes trinagle at time picker
    .react-datepicker--time-only .react-datepicker__triangle {
      left: -9% !important;
    }
  }

  @media ${({ theme }) => theme.minDesktop} {
    .react-datepicker-wrapper:first-child {
      margin-right: 28px;
    }

    .react-datepicker__input-container input {
      :focus {
        border: 2px solid #ffc843;
      }
    }

    //Fixes trinagle at time picker
    .react-datepicker--time-only .react-datepicker__triangle {
      left: -47% !important;
    }
  }

  ${({ pathname }) => pageStyles('', createEventStyles, landingStyles)[pathname]}
`;
