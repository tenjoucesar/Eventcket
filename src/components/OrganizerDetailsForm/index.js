import { useForm } from 'react-hook-form';

import FormElement from 'components/FormElement';
import { OrganizerForm } from 'sharedComponents/Forms';
import { Button } from 'containers/CreateEvent/styles';

import questions from './questions';

const OrganizerDetailsForm = ({ displayNextForm }) => {
  const { register, handleSubmit, control } = useForm();

  const submit = (data) => {
    displayNextForm({organizer: data});
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <OrganizerForm>
        {questions.map(({ id, ...rest }, index) => (
          <FormElement
            {...rest}
            key={id}
            className={`div-${index + 1}`}
            register={register}
          />
        ))}
      </OrganizerForm>
      <Button>SAVE & NEXT</Button>
    </form>
  );
};

export default OrganizerDetailsForm;
