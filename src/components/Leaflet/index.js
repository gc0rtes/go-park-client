import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import redIcon from "../../resources/images/marker.png";

export default function MyMap() {
  const [center, setCenter] = useState({ lat: 52.05579, lng: 4.28593 }); //zuiderpark picked from google
  const ZOOM_LEVEL = 15;

  const myMarkerPosition = [52.05579, 4.28593];

  const myIcon = L.icon({
    iconUrl: redIcon,
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  return (
    <div className="container">
      <MapContainer
        style={{ height: "500px", width: "500px" }}
        center={center}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
      >
        <TileLayer
          //Do NOT change/remove this copyright - it can brake the App!
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={myMarkerPosition} icon={myIcon}>
          <Popup>
            ZuiderPark, Den Haag. <br /> Look at event description the exact
            location.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
