import { memo } from 'react';
import { ConditionsContainer, FormButton, FormContainer, FormTitle, FormSubtitle, ImageContainer, InputCheckBox, MainContent, Span } from './styles';
import CreateEvent from 'sharedComponents/CreateEvent';
import Footer from 'components/Footer';
import Input from 'sharedComponents/Input';

const Login = () => (
  <>
    <MainContent>
      <ImageContainer />
      <FormContainer>
        <FormTitle>Create new account</FormTitle>
        <FormSubtitle>Use your work email to create new account...</FormSubtitle>
        {options.map(({ placeholder, id }) => (
          <Input placeholder={placeholder} key={id} />
        ))}
        <ConditionsContainer>
          <InputCheckBox type='checkbox' />
          <Span>I have read the Teams and Conditions</Span>
        </ConditionsContainer>
        <FormButton>Sign up now</FormButton>
        <Span>
          Have an account? <strong>Sign In</strong>
        </Span>
      </FormContainer>
    </MainContent>
    <CreateEvent />
    <Footer />
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
