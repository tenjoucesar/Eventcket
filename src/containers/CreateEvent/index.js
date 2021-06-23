import { memo } from 'react';
import { Button, Container } from './styles';
import Checkbox from 'components/AppCheckbox';
import options from './options';
import RowSeccion from './Seccion';

const CreateEvent = () => (
  <Container>
    {options.map(option => (
      <RowSeccion {...option} key={option.id} />
    ))}
    <Button>SAVE EVENT</Button>
    <Checkbox label='I have read the Terms and Conditions' row />
  </Container>
);

export default memo(CreateEvent);
