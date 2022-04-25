import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React, { useEffect } from "react";
import "./index.scss";
import { map } from "leaflet";

const Map = () => {
  useEffect(() => {
    Map.remove();
  }, []);

  const map = useMap;
  const position = [51.505, -0.09];
  map.remove();
  return (
    <>
      <div className='map-wrap'>
        <MapContainer
          placeholder
          center={position}
          zoom={13}
          scrollWheelZoom={false}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={position}>
            <Popup>Find us here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
