import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import redIcon from "../resources/images/marker.png";

const markerIcon = new L.Icon({
  iconUrl: redIcon,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

function SearchMap(results) {
  const [events, setEvents] = useState(results);
  console.log("whats is events", events.results);

  useEffect(() => {
    setEvents(results);
  }, [results]);

  const center = { lat: 52.215243, lng: 4.623635 };
  const ZOOM_LEVEL = 9;

  return (
    <div className="container my-3">
      <MapContainer
        style={{ width: "500px", height: "500px" }}
        center={center}
        zoom={ZOOM_LEVEL}
      >
        <TileLayer
          //Do NOT change/remove this copyright - it can brake the App!
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {events.results.map((event, idx) => (
          <Marker position={[event.lat, event.lng]} icon={markerIcon} key={idx}>
            <Popup>
              <span>
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={event.imageUrl}
                  alt={event.title}
                />{" "}
              </span>
              <span>
                <Link to={`event/${event.id}`}>
                  <b> {event.title} </b>
                </Link>{" "}
                <br />
                <i className="far fa-calendar-alt"></i> {event.startDate} |
                &nbsp;
                <i className="fa fa-clock-o"></i> {event.startHour}
                <br />
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default SearchMap;
