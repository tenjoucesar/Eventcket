import { useContext, useState } from 'react';
import { DeviceContext } from 'providers/Device';
import { Button, ButtonContainer, Container } from './styles';
import eventDetails from './eventDetails';
import FormElement from 'components/FormElement';
import organizerDetails from './organizerDetails';
import RowSeccion from './Seccion';
import ticketsDetails from './ticketsDetails';

const CreateEvent = () => {
  const { device } = useContext(DeviceContext);
  const [selected, setSelected] = useState(3);
  const hide = id => device === 'largeDesktop' && id !== selected;

  return (
    <Container>
      <RowSeccion {...eventDetails} hide={hide(eventDetails.id)} />
      <RowSeccion {...organizerDetails} hide={hide(organizerDetails.id)} />
      <RowSeccion {...ticketsDetails} hide={hide(ticketsDetails.id)} />
      {selected !== 3 && device === 'largeDesktop' ? null : (
        <ButtonContainer>
          <Button>SAVE EVENT</Button>
          <FormElement type='checkbox' label='I have read the Terms and Conditions' className='row' />
        </ButtonContainer>
      )}
    </Container>
  );
};
export default CreateEvent;
