import React from 'react';
import FormElement from 'components/FormElement';
import {
  Container,
  AdjustedH3,
  SubTitle,
  AdjustedMainButton,
  TextContainer,
  FormContainer,
} from './styles';

const ContactSection = () => (
  <Container>
    <TextContainer>
      <AdjustedH3>Questions, Comments, Concerns?</AdjustedH3>
      <SubTitle>We’d love to <span>hear</span> from you!</SubTitle>
    </TextContainer>
    <FormContainer>
      {inputOptions.map(({type, text, placeholder, id}) => (
        <FormElement
          type={type}
          placeholder={placeholder}
          label={text}
          key={id}
        />
      ))}
      <AdjustedMainButton>
        Send a Message
      </AdjustedMainButton>
    </FormContainer>
  </Container>
);

const inputOptions = [
  { type: 'input', text: 'Your Email Address', placeholder: 'something@website.com', id: 1},
  { type: 'input', text: 'Subject', placeholder: 'Question about your article', id: 2},
  { type: 'textarea', text: 'Message', placeholder: 'Your message starts with…', id: 3},
];

export default ContactSection;
