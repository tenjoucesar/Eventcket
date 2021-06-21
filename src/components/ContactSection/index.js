import React from 'react';
import {
  Container,
  AdjustedH3,
  Text,
  TextInput,
  Input,
  Textarea,
  QuestionContainer,
  AdjustedMainButton,
  TextContainer,
  FormContainer,
} from './styles';

const ContactSection = () => (
  <Container>
    <TextContainer>
      <AdjustedH3>Questions, Comments, Concerns?</AdjustedH3>
      <Text>We’d love to <span>hear</span> from you!</Text>
    </TextContainer>
    <FormContainer>
      {inputOptions.map(({text, placeholder, id}) => (
        <QuestionContainer key={id}>
          <TextInput>{text}</TextInput>
          <Input placeholder={placeholder} />
        </QuestionContainer>
      ))}
      <QuestionContainer>
        <TextInput>Message</TextInput>
        <Textarea rows='4' placeholder='Your message starts with…' />
      </QuestionContainer>
      <AdjustedMainButton>
        Send a Message
      </AdjustedMainButton>
    </FormContainer>
  </Container>
);

const inputOptions = [
  { text: 'Your Email Address', placeholder: 'something@website.com', id: 1, name: 'email'},
  { text: 'Subject', placeholder: 'Question about your article', id: 2, name: 'subject' },
];

export default ContactSection;
