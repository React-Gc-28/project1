import React from "react";
import HeroImg from "../../components/HeroImg";
import "./index.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import Welcome from "../../components/Home/Welcome";
import Menu from "../../components/Home/Menu";
// function MyComponent() {
//   const map = useMap();
//   console.log("map center:", map.getCenter());
//   return null;
// }
function MyComponent() {
  const map = useMapEvent("click", () => {
    map.distance([50.5, 30.5], [6.70247818276993, 3.4265800630055963]);
  });
  console.log(map);
  return null;
}
// function MyComponent() {
//   const map = useMapEvents({
//     click: () => {
//       map.locate();
//     },
//     locationfound: (location) => {
//       console.log("location found:", location);
//     },
//   });
//   return null;
// }

const Home = () => {
  return (
    <>
      <HeroImg />
      <Welcome />
      <Menu />
      <AnimationOnScroll animateIn='animate__backInLeft' duration={2}>
        <div className='map'>
          <h1 className='title'>Visit us</h1>
          <MapContainer
            center={[6.70247818276993, 3.4265800630055963]}
            zoom={12}
            dragging={false}>
            <MyComponent />
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[6.70247818276993, 3.4265800630055963]}>
              <Popup>Find PANERI Here😊😊</Popup>
            </Marker>
          </MapContainer>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default Home;
