import { useState } from 'react';
import { Button, Category } from './styles';
import { TiketsForm } from 'sharedComponents/Forms';
import FormElement from 'components/FormElement';
import questions from './questions';

const TicketsDetailsForm = () => {
  const [showSelect, setshowSelect] = useState(false);
  return (
    <TiketsForm>
      {questions.map(({ id, row, ...rest }, index) => (
        <FormElement {...rest} key={id} className={`div-${index + 1} ${row ? 'row' : ''} `} />
      ))}
      <Category>
        {showSelect ? (
          <FormElement placeholder='Select category...' label='Category' type='select' />
        ) : (
          <Button onClick={() => setshowSelect(true)}>add category</Button>
        )}
      </Category>
    </TiketsForm>
  );
};

export default TicketsDetailsForm;
