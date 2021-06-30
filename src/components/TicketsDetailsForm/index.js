import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useState } from 'react';
import { MainButton } from 'sharedComponents/Buttons';
import FormElement from 'components/FormElement';
import { TiketsForm } from 'sharedComponents/Forms';
import { Button, ButtonContainer } from 'containers/CreateEvent/styles';

import questions from './questions';

const CategoryButton = styled(MainButton)`
  width: 200px;
`;

const TicketsDetailsForm = ({ displayNextForm }) => {
  const { register, handleSubmit, control } = useForm();
  const [showSelect, setshowSelect] = useState(false);
  const toggleSelect = () => setshowSelect(true);

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
      {showSelect
        ?
          <FormElement placeholder='Select category...' label='Category' type='select' />
        :
          <CategoryButton onClick={toggleSelect}>add category</CategoryButton>
      }
      <ButtonContainer>
        <Button type="submit">SAVE EVENT</Button>
        <FormElement type='checkbox' label='I have read the Terms and Conditions' className='row' />
      </ButtonContainer>
    </form>
  );
};

export default TicketsDetailsForm;
