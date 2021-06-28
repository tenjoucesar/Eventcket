import { memo, useCallback, useContext, useState } from 'react';
import { Button, Icon, Seccion, SeccionContent, SeccionTitle, UpdateArea, UpdateHeader, UpdateTitle, UpdateSeccion } from './styles';
import { DeviceContext } from 'providers/Device';
import { EventForm, OrganizerForm, TiketsForm } from 'sharedComponents/Forms';
import Arrow from 'images/icons/arrow.png';
import Cancel from 'images/icons/cancel.png';
import ExpandLess from 'images/icons/expand-less.png';
import ExpandMore from 'images/icons/expand-more.png';
import FormElement from 'components/FormElement';

const element = {
  event: EventForm,
  organizer: OrganizerForm,
  tiket: TiketsForm,
};

const RowSeccion = ({ onChange, id, options = [], hide, update, title, type }) => {
  const { device } = useContext(DeviceContext);
  const [show, setShow] = useState(true);
  const toggleShow = useCallback(() => setShow(!show), [show]);
  const Element = element[type];
  if (hide) return null;

  return (
    <Seccion>
      <SeccionTitle>
        {title}
        <Icon
          className='arrow'
          src={ExpandLess}
          // src={show ? ExpandLess : ExpandMore}
          alt='tickets'
          onClick={toggleShow}
        />
      </SeccionTitle>
      <SeccionContent className={show ? '' : 'hidden'}>
        <Element>
          {options.map(({ id, ...rest }, index) => (
            <FormElement {...rest} key={id} className={`div-${index + 1}`} />
          ))}
        </Element>
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
      {/* only if it is not the last */}
      {id !== 3 && device === 'largeDesktop' && <Button onClick={onChange}>SAVE & NEXT</Button>}
    </Seccion>
  );
};

export default memo(RowSeccion);
