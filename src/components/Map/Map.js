import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import styles from './Map.module.css'
import iconMarker2x from 'leaflet/dist/images/marker-icon-2x.png'
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconMarkerShadow from 'leaflet/dist/images/marker-shadow.png'

const position = [51.505, -0.09];

const Map = ({className}) => {
  let mapClassName = styles.map;

  if(className){
    mapClassName=`${mapClassName} ${className}`
  }

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconMarker2x.src,
      iconUrl: iconMarker.src,
      shadowUrl: iconMarkerShadow.src,
    });
  }, []);
  

  return (
    <MapContainer className={mapClassName} center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
