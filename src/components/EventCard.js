import React from "react";
import { Link } from "react-router-dom";

export default function Artwork({
  eventId,
  imageUrl,
  title,
  startDate,
  parkName,
  cityName,
}) {
  return (
    <div className="container">
      <div className="card">
        <img className="d-block w-100" src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <h5>{startDate}</h5>
        <h5>{parkName}</h5>
        <h5>{cityName}</h5>
        <Link to={`/details/${eventId}`}>Details</Link>
      </div>
    </div>
  );
}
