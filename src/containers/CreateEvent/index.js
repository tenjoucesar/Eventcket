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
  const [selected, setSelected] = useState(1);
  const hide = id => device === 'largeDesktop' && id !== selected;

  const onChange = () => {
    //https://codesandbox.io/s/react-hook-form-wizard-form-9pg6j?file=/src/styles.css
    setSelected(selected === 3 ? 1 : selected + 1);
  };

  return (
    <Container>
      <RowSeccion {...eventDetails} hide={hide(eventDetails.id)} onChange={onChange} />
      <RowSeccion {...organizerDetails} hide={hide(organizerDetails.id)} onChange={onChange} />
      <RowSeccion {...ticketsDetails} hide={hide(ticketsDetails.id)} onChange={onChange} />
      {selected !== 3 && device === 'largeDesktop' ? null : (
        <ButtonContainer>
          <Button onClick={onChange}>SAVE EVENT</Button>
          <FormElement type='checkbox' label='I have read the Terms and Conditions' className='row' />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default CreateEvent;
