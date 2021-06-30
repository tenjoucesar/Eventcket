import { TiketsForm } from 'sharedComponents/Forms';
import FormElement from 'components/FormElement';
import questions from './questions';

const TicketsDetailsForm = () => (
  <TiketsForm>
    {questions.map(({ id, row, ...rest }, index) => (
      <FormElement {...rest} key={id} className={`div-${index + 1} ${row ? 'row' : ''} `} />
    ))}
  </TiketsForm>
);

export default TicketsDetailsForm;
