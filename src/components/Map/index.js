import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React from "react";
import "./index.scss";

const Map = () => {
  const position = [51.505, -0.09];
  return (
    <>
      <div className='map-wrap'>
        <h2 className='title'>Visit Us</h2>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>Find us here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
