import { memo, useCallback, useContext, useState } from 'react';
import { Button, Icon, InputContainer, Seccion, SeccionContent, SeccionTitle, UpdateArea, UpdateHeader, UpdateTitle, UpdateSeccion } from './styles';
import { DeviceContext } from 'providers/Device';
import Arrow from 'images/icons/arrow.png';
import Cancel from 'images/icons/cancel.png';
import ExpandLess from 'images/icons/expand-less.png';
import ExpandMore from 'images/icons/expand-more.png';
import FormElement from 'components/FormElement';

const RowSeccion = ({ id, options = [], title, update, className, hide }) => {
  const { device } = useContext(DeviceContext);
  const [show, setShow] = useState(true);
  const toggleShow = useCallback(() => setShow(!show), [show]);
  if (hide) return null;

  return (
    <Seccion>
      <SeccionTitle>
        {title} <Icon className='arrow' src={show ? ExpandLess : ExpandMore} alt='tickets' onClick={toggleShow} />
      </SeccionTitle>
      <SeccionContent className={show ? '' : 'hidden'}>
        <InputContainer className={className}>
          {options.map(({ id, ...rest }, index) => (
            <FormElement {...rest} key={id} className={`div-${index + 1} `} />
          ))}
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
      {/* solo si no es el ultimo */}
      {id !== 3 && device === 'largeDesktop' && <Button>SAVE & NEXT</Button>}
    </Seccion>
  );
};

export default memo(RowSeccion);
