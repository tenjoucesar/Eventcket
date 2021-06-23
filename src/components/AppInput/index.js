import { memo } from 'react';
import { TextArea } from './styles';
import FormGroup from 'sharedComponents/FormGroup';
import Label from 'sharedComponents/Label';
import Input from 'sharedComponents/Input';

const AppInput = ({ label, textarea, className, ...rest }) => (
  <FormGroup className={className}>
    {label && <Label>{label}</Label>}
    {!textarea ? <Input {...rest} /> : <TextArea />}
  </FormGroup>
);
export default memo(AppInput);
