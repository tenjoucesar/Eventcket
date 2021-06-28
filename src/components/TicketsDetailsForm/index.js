import { TiketsForm } from 'sharedComponents/Forms';
import FormElement from 'components/FormElement';
import questions from './questions';

const TicketsDetailsForm = () => (
  <TiketsForm>
    {questions.map(({ id, ...rest }, index) => (
      <FormElement {...rest} key={id} className={`div-${index + 1}`} />
    ))}
  </TiketsForm>
);

export default TicketsDetailsForm;
