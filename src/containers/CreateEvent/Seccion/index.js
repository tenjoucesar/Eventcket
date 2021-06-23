import { memo, useCallback, useState } from 'react';
import { Icon, InputContainer, Seccion, SeccionContent, SeccionTitle, UpdateArea, UpdateHeader, UpdateTitle, UpdateSeccion } from './styles';
import AppCheckbox from 'components/AppCheckbox';
import AppInput from 'components/AppInput';
import AppSelect from 'components/AppSelect';
import Arrow from 'images/icons/arrow.png';
import Cancel from 'images/icons/cancel.png';
import ExpandLess from 'images/icons/expand-less.png';
import ExpandMore from 'images/icons/expand-more.png';

const RowSeccion = ({ options = [], title, update, className }) => {
  const [show, setShow] = useState(true);
  const toggleShow = useCallback(() => setShow(!show), [show]);

  return (
    <Seccion>
      <SeccionTitle>
        {title} <Icon className='arrow' src={show ? ExpandLess : ExpandMore} alt='tickets' onClick={toggleShow} />
      </SeccionTitle>
      <SeccionContent className={show ? '' : 'hidden'}>
        <InputContainer className={className}>
          {options.map(({ id, type, ...rest }, index) => {
            const props = { ...rest, className: `div-${index}` };
            return !type ? <AppInput {...props} key={id} /> : type === 'checkbox' ? <AppCheckbox {...props} key={id} /> : <AppSelect {...props} key={id} />;
          })}
        </InputContainer>
        {update && (
          <>
            <UpdateHeader>Upload an image or leave empty for featured image</UpdateHeader>
            <UpdateSeccion>
              <UpdateArea>
                <Icon src={Arrow} alt='arrow' />
                <UpdateTitle>Upload</UpdateTitle>
              </UpdateArea>
              <UpdateArea>
                <Icon src={Cancel} alt='cancel' />
                <UpdateTitle>No Image</UpdateTitle>
              </UpdateArea>
            </UpdateSeccion>
          </>
        )}
      </SeccionContent>
    </Seccion>
  );
};

export default memo(RowSeccion);
