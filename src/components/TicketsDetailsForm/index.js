import styled from 'styled-components';
import { useState } from 'react';
import { MainButton } from 'sharedComponents/Buttons';
import { TiketsForm } from 'sharedComponents/Forms';
import FormElement from 'components/FormElement';
import questions from './questions';

const Button = styled(MainButton)`
  width: 200px;
`;

const TicketsDetailsForm = () => {
  const [showSelect, setshowSelect] = useState(false);
  const toggleSelect = () => setshowSelect(true);
  return (
    <TiketsForm>
      {questions.map(({ id, row, ...rest }, index) => (
        <FormElement {...rest} key={id} className={`div-${index + 1} ${row ? 'row' : ''} `} />
      ))}
      {showSelect ? <FormElement placeholder='Select category...' label='Category' type='select' /> : <Button onClick={toggleSelect}>add category</Button>}
    </TiketsForm>
  );
};

export default TicketsDetailsForm;
