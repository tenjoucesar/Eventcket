import { memo } from 'react';
import { ImageContainer, FormContainer, FormTitle, InputCheckBox, FormSubtitle, FormButton, ConditionsContainer, Span, MainContent } from './styles';
import CreateEvent from '../../components/CreateEvent';
import Footer from 'components/Footer';
import Input from '../../sharedComponents/Input';

const Login = () => (
  <>
    <MainContent>
      <ImageContainer />
      <FormContainer>
        <FormTitle>Create new account</FormTitle>
        <FormSubtitle>Use your work email to create new account...</FormSubtitle>
        {options.map((option, index) => (
          <Input placeholder={option} key={index} />
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

const options = ['First Name', 'Last Name', 'Email Address', 'Phone Number', 'Password', 'Discord ID'];

export default memo(Login);
