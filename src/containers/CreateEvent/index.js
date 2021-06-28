import { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { DeviceContext } from 'providers/Device';
import FormElement from 'components/FormElement';
import eventDetails from './eventDetails';
import organizerDetails from './organizerDetails';
import RowSeccion from './Section';
import ticketsDetails from './ticketsDetails';
import { Button, ButtonContainer, Container } from './styles';
const EVENT_CREATED = 'EVENT_CREATED';
const CreateEvent = () => {
  const { device } = useContext(DeviceContext);
  let history = useHistory();

  const [selected, setSelected] = useState(1);
  const hide = id => true && id !== selected;

  const onChange = () => {
    if (selected === 3) {
      history.push({
        pathname: "/events/1",
        state: EVENT_CREATED
      });
    }
    setSelected(selected + 1);
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
