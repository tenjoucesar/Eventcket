import { useForm } from 'react-hook-form';

import FormElement from 'components/FormElement';
import { TiketsForm } from 'sharedComponents/Forms';
import { Button, ButtonContainer } from 'containers/CreateEvent/styles';

import questions from './questions';

const TicketsDetailsForm = ({ displayNextForm }) => {
  const { register, handleSubmit, control } = useForm();

  const submit = (data) => {
    displayNextForm({ tickets: [{ ...data }] });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TiketsForm>
        {questions.map(({ id, ...rest }, index) => (
          <FormElement
            key={id}
            className={`div-${index + 1}`}
            {...rest}
            register={register}
          />
          ))}
      </TiketsForm>
      <ButtonContainer>
        <Button>SAVE EVENT</Button>
        <FormElement type='checkbox' label='I have read the Terms and Conditions' className='row' />
      </ButtonContainer>
    </form>
  );
};

export default TicketsDetailsForm;
