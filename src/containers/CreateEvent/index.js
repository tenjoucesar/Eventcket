import { memo } from 'react';
import { Button, Container } from './styles';
import eventDetails from './eventDetails';
import FormElement from 'components/FormElement';
import organizerDetails from './organizerDetails';
import RowSeccion from './Seccion';
import ticketsDetails from './ticketsDetails';

const CreateEvent = () => (
  <Container>
    <RowSeccion {...eventDetails} />
    <RowSeccion {...organizerDetails} />
    <RowSeccion {...ticketsDetails} />
    <Button>SAVE EVENT</Button>
    <FormElement type='checkbox' label='I have read the Terms and Conditions' className='row' />
  </Container>
);

export default memo(CreateEvent);
