import { useEffect,useRef } from "react";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconMarkerShadow from "leaflet/dist/images/marker-shadow.png";

const { MapContainer, Marker, Popup, TileLayer } = ReactLeaflet;

const Map = ({ className, children, ...rest }) => {
  const mapRef = useRef(null);
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
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
    <MapContainer className={mapClassName} {...rest} ref={mapRef}>
      {children ? children({ Marker, Popup, TileLayer }, mapRef.current) : null}
    </MapContainer>
  );
};

export default Map;
