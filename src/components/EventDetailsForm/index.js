import { useForm } from 'react-hook-form';
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
import { Button, } from 'containers/CreateEvent/styles';

const EventDetailsForm = ({defaultValues, displayNextForm}) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: defaultValues && defaultValues.name,
      startTime: defaultValues && defaultValues.startTime,
      endTime: defaultValues && defaultValues.endTime,
      location: defaultValues && defaultValues.location,
    }
  });

  const submit = (data) => {
    displayNextForm(data);
  }


  return (
    <form onSubmit={handleSubmit(submit)}>
      <EventForm>
        {questions.map(({ id, ...rest }, index) => (
          <FormElement
            {...rest}
            key={id}
            className={`div-${index + 1}`}
            register={register}
          />
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
      <Button>SAVE & NEXT</Button>
    </form>
  );
};

export default EventDetailsForm;
