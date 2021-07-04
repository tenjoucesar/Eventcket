import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { EventForm } from 'sharedComponents/Forms';
import Arrow from 'images/icons/arrow.png';
import Cancel from 'images/icons/cancel.png';
import FormElement from 'components/FormElement';
import questions from './questions';
import { Icon, UpdateArea, UpdateHeader, UpdateTitle, UpdateSection, ImagePreview } from 'themes/createEventSharedStyles';
import { Button } from 'containers/CreateEvent/styles';

const EventDetailsForm = ({ defaultValues, displayNextForm }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: defaultValues && defaultValues.name,
      startTime: defaultValues && defaultValues.startTime,
      endTime: defaultValues && defaultValues.endTime,
      location: defaultValues && defaultValues.location,
    },
  });
  const [image, setImage] = useState(null);
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    //bbecause there is a way to add not accepted files
    if (file) setImage({ file, preview: URL.createObjectURL(file) });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg',
    noKeyboard: true,
    onDrop,
  });

  const submit = data => {
    //Formatting Date values as BE expect them.
    //This could get moved to the place where we do api call
    if (data.startTime || data.endTime) {
      if (data.startTime) data.startTime = data.startTime.toISOString();
      if (data.endTime) data.endTime = data.endTime.toISOString();
    }
    displayNextForm(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <EventForm>
        {questions.map(({ id, ...rest }, index) => (
          <FormElement {...rest} key={id} className={`div-${index + 1}`} register={register} control={control} />
        ))}
      </EventForm>
      <UpdateHeader>Upload an image or leave empty for featured image</UpdateHeader>
      <UpdateSection>
        <UpdateArea {...getRootProps()}>
          <input {...getInputProps()} />
          <Icon src={Arrow} alt='arrow' />
          <UpdateTitle>Upload</UpdateTitle>
        </UpdateArea>
        <UpdateArea>
          {image ? (
            <ImagePreview src={image.preview} alt='avatar' />
          ) : (
            <>
              <Icon src={Cancel} alt='cancel' />
              <UpdateTitle>No Image</UpdateTitle>
            </>
          )}
        </UpdateArea>
      </UpdateSection>
      <Button>SAVE & NEXT</Button>
    </form>
  );
};

export default EventDetailsForm;
