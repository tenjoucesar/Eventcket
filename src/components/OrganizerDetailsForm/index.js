import { OrganizerForm } from 'sharedComponents/Forms';
import FormElement from 'components/FormElement';
import questions from './questions';

const OrganizerDetailsForm = () => (
  <OrganizerForm>
    {questions.map(({ id, ...rest }, index) => (
      <FormElement {...rest} key={id} className={`div-${index + 1}`} />
    ))}
  </OrganizerForm>
);

export default OrganizerDetailsForm;
