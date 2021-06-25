import React from "react";
import { Link } from "react-router-dom";

export default function Artwork({
  id,
  imageUrl,
  title,
  startDate,
  startHour,
  parkName,
  cityName,
}) {
  return (
    <div className="card text-center">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h5 className="card-text">{startDate}</h5>
        <h5 className="card-text">{startHour}</h5>
        <h5 className="card-text">{parkName}</h5>
        <h5 className="card-text">{cityName}</h5>
        <Link to={`/event/${id}`}>
          <button type="button" class="btn btn-primary login_btn">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}
