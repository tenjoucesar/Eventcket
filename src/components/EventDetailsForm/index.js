import { EventForm } from 'sharedComponents/Forms';
import Arrow from 'images/icons/arrow.png';
import Cancel from 'images/icons/cancel.png';
import FormElement from 'components/FormElement';
import questions from './questions';
import {
  Icon,
  UpdateArea,
  UpdateHeader,
  UpdateTitle,
  UpdateSection
} from 'themes/createEventSharedStyles';

const EventDetailsForm = () => (
  <>
    <EventForm>
      {questions.map(({ id, ...rest }, index) => (
        <FormElement {...rest} key={id} className={`div-${index + 1}`} />
      ))}
    </EventForm>
    <UpdateHeader>Upload an image or leave empty for featured image</UpdateHeader>
    <UpdateSection>
      <UpdateArea>
        <Icon src={Arrow} alt='arrow' />
        <UpdateTitle>Upload</UpdateTitle>
      </UpdateArea>
      <UpdateArea>
        <Icon src={Cancel} alt='cancel' />
        <UpdateTitle>No Image</UpdateTitle>
      </UpdateArea>
    </UpdateSection>
  </>
);

export default EventDetailsForm;
