import { Marker, useMapEvents } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const AddMarker = ({ position, setPosition }) => {
  useMapEvents({
    click: e => {
      setPosition(e.latlng);
    },
  });
  return position === null ? null : <Marker position={position} />;
};

export default AddMarker;
