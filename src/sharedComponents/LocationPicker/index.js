import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { customStyles } from './styles';
import AddMarker from './addMarker';
import Input from '../Input';
import Modal from 'react-modal';

const defaultPosition = {
  lat: 32.8208751,
  lng: -96.871636,
};

const LocationPicker = ({ placeholder, pathname }) => {
  const [modal, setModal] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const toggleModal = () => setModal(!modal);

  const ChangeMapView = () => {
    const map = useMap();
    map.setView(selectedLocation || position, map.getZoom());
    return null;
  };

  const onSelectPosition = values => {
    setSelectedLocation(values);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <>
      <Input pathname={pathname} readOnly placeholder={selectedLocation ? 'Selected' : placeholder} onClick={toggleModal} style={{ cursor: 'pointer' }} />
      {modal && (
        <Modal 
          isOpen={modal} 
          onRequestClose={toggleModal} 
          style={customStyles} 
          contentLabel='Example Modal' 
          ariaHideApp={false}>
          <MapContainer zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <ChangeMapView />
            <AddMarker 
              position={selectedLocation} 
              setPosition={onSelectPosition} 
            />
          </MapContainer>
        </Modal>
      )}
    </>
  );
};

export default LocationPicker;
