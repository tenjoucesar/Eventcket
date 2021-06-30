import { useState } from 'react';
import { useHistory } from "react-router-dom";

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
import { Button, Container } from './styles';

const EVENT_CREATED = 'EVENT_CREATED';

const CreateEvent = ({ location: { state: defaultValues }}) => {
  let history = useHistory();
  const [activeForm, setActiveForm] = useState(1);
  const [createEventData, setCreateEventData] = useState({});

  const getSectionTitle = () => {
    if (activeForm === 1) return 'EVENT DETAILS';
    if (activeForm === 2) return 'ORGANIZER DETAILS';
    if (activeForm === 3) return 'TICKETS DETAILS'
  }

  const getSectionContent = () => {
    if (activeForm === 1) return <EventDetailsForm defaultValues={defaultValues} Button={Button} displayNextForm={displayNextForm} />;
    if (activeForm === 2) return <OrganizerDetailsForm Button={Button} displayNextForm={displayNextForm} />;
    if (activeForm === 3) return <TicketsDetailsForm Button={Button} displayNextForm={displayNextForm} />;
  }

  const displayNextForm = (dataForm) => {
    setCreateEventData({
      ...createEventData,
      ...dataForm,
    });

    if (activeForm === 3) {
      //Code will change onSucces of create event call.
      history.push({
        pathname: "/events/1",
        state: EVENT_CREATED
      });
    }

    setActiveForm(activeForm + 1);
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
    </Container>
  );
};

export default CreateEvent;
