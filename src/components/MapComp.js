import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//Actions and Selectors
import { eventMarkerPosition } from "../store/eventMarkPosition/actions";

//Setup for Leaflet DefaultIcon
// import Leaflet from "leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

// let DefaultIcon = Leaflet.icon({
//   ...Leaflet.Icon.Default.prototype.options,
//   iconUrl: icon,
//   iconRetinaUrl: iconRetina,
//   shadowUrl: iconShadow,
// });
// Leaflet.Marker.prototype.options.icon = DefaultIcon;

import redIcon from "../resources/images/marker.png";
const myIcon = L.icon({
  iconUrl: redIcon,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

//This make the setview of map change
function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords);
  // map.setView(coords, map.getZoom());

  return null;
}

//Map Component start HERE
function MapComp({ coords }) {
  const dispatch = useDispatch();

  //This make the marker on map change
  const [markerPosition, setMarkerPosition] = useState([0, 0]);
  const MapPinComponent = () => {
    useMapEvents({
      click: (e) => {
        const y = e.latlng.lat;
        const x = e.latlng.lng;
        console.log("You clicked the map at LAT: " + y + " and LNG: " + x);
        setMarkerPosition([y, x]);
        dispatch(eventMarkerPosition(y, x));
      },
    });
    return null;
  };

  return (
    <MapContainer
      style={{ height: "500px", width: "500px" }}
      center={coords}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <SetViewOnClick coords={coords} />

      <MapPinComponent />

      <Marker position={markerPosition} icon={myIcon}>
        <Popup>Look on the event description to know the exact location.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComp;
