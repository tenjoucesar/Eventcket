import { Container, H4 } from './styles';
import AppInput from 'sharedComponents/Input';

const CreateEvent = () => (
  <Container>
    <H4>Event details</H4>
    <AppInput className='event-input' label='Event Name' placeholder='Event Name' />
  </Container>
);

export default CreateEvent;
