import { memo } from 'react';
import { ConditionsContainer, FormButton, FormContainer, FormTitle, FormSubtitle, ImageContainer, MainContent, Span } from './styles';
import CreateEvent from 'sharedComponents/CreateEvent';
import FormElement from 'components/FormElement';

const Login = () => (
  <>
    <MainContent>
      <ImageContainer />
      <FormContainer>
        <FormTitle>Create new account</FormTitle>
        <FormSubtitle>Use your work email to create new account...</FormSubtitle>
        {options.map(({ placeholder, id }) => (
          <FormElement placeholder={placeholder} key={id} />
        ))}
        <ConditionsContainer>
          <FormElement className='row' type='checkbox' label='I have read the Terms and Conditions' />
        </ConditionsContainer>
        <FormButton>Sign up now</FormButton>
        <Span>
          Have an account? <strong>Sign In</strong>
        </Span>
      </FormContainer>
    </MainContent>
    <CreateEvent />
  </>
);

const options = [
  { placeholder: 'First Name', id: 1 },
  { placeholder: 'Email Address', id: 2 },
  { placeholder: 'Password', id: 3 },
  { placeholder: 'Phone Number', id: 4 },
  { placeholder: 'Discord ID', id: 5 },
];

export default memo(Login);
