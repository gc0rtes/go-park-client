import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  MapContainer,
  useMapEvents,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import redIcon from "../../resources/images/marker.png";

//Actions and Selectors
import { eventMarkerPosition } from "../../store/eventMarkPosition/actions";

export default function MyMap({
  eventLat,
  eventLng,
  parkLat,
  parkLng,
  allowClick,
}) {
  const dispatch = useDispatch();
  const center = { lat: parkLat, lng: parkLng }; //zuiderpark picked from google
  const [markerPosition, setMarkerPosition] = useState({
    lat: eventLat,
    lng: eventLng,
  });
  // console.log("what is center", center);

  const ZOOM_LEVEL = 15;

  const myIcon = L.icon({
    iconUrl: redIcon,
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  const MapPinComponent = () => {
    useMapEvents({
      click: (e) => {
        const x = e.latlng.lng;
        const y = e.latlng.lat;
        console.log("You clicked the map at LAT: " + y + " and LNG: " + x);
        setMarkerPosition({
          lat: y,
          lng: x,
        });
        dispatch(eventMarkerPosition(y, x));
      },
    });
    return null;
  };

  return (
    <div className="container">
      <MapContainer
        style={{ height: "500px", width: "500px" }}
        center={center}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
      >
        {allowClick ? <MapPinComponent /> : null}

        <TileLayer
          //Do NOT change/remove this copyright - it can brake the App!
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={markerPosition} icon={myIcon}>
          <Popup>
            Look on the event description to know the exact location.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
