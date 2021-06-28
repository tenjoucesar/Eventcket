import { useState } from 'react';
import { useHistory } from "react-router-dom";
import FormElement from 'components/FormElement';
import EventDetailsForm from 'components/EventDetailsForm';
import OrganizerDetailsForm from 'components/OrganizerDetailsForm';
import TicketsDetailsForm from 'components/TicketsDetailsForm';
import ExpandLess from 'images/icons/expand-less.png';
import {
  Icon,
  Section,
  SectionContent,
  SectionTitle,
} from 'themes/createEventSharedStyles';
import { Button, ButtonContainer, Container } from './styles';

const EVENT_CREATED = 'EVENT_CREATED';

const CreateEvent = () => {
  let history = useHistory();
  const [selected, setSelected] = useState(1);

  const getSectionTitle = () => {
    if (selected === 1) return 'EVENT DETAILS';
    if (selected === 2) return 'ORGANIZER DETAILS';
    if (selected === 3) return 'TICKETS DETAILS'
  }

  const getSectionContent = () => {
    if (selected === 1) return <EventDetailsForm />;
    if (selected === 2) return <OrganizerDetailsForm />;
    if (selected === 3) return <TicketsDetailsForm />
  }

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
      <Section>
        <SectionTitle>
          {getSectionTitle()}
          <Icon
            className='arrow'
            src={ExpandLess}
            alt='tickets'
          />
        </SectionTitle>
        <SectionContent>
          {getSectionContent()}
        </SectionContent>
      </Section>
      {selected !== 3 && <Button onClick={onChange}>SAVE & NEXT</Button>}
      {selected === 3 &&  (
        <ButtonContainer>
          <Button onClick={onChange}>SAVE EVENT</Button>
          <FormElement type='checkbox' label='I have read the Terms and Conditions' className='row' />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default CreateEvent;
