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
  tag,
}) {
  return (
    <div className="card card-blog">
      <Link to={`/event/${id}`}>
        <div className="card-image ">
          <img className="img " src={imageUrl} alt={title} />
          <div className="ripple-cont"></div>
        </div>
      </Link>
      <div className="table">
        <h6 className="category text-success">
          <span className="tag">{tag}</span>
          {/* <i className="fas fa-futbol"></i> Sport */}
        </h6>
        <div className="stats">
          <i className="far fa-calendar-alt"></i> {startDate} &nbsp;
          <i className="fa fa-clock-o"></i> {startHour}
        </div>
        <h4 className="card-caption">{title}</h4>
        <p className="card-description">
          {parkName} - {cityName}
        </p>
        <div className="ftr">
          <div className="author">
            <img
              src="https://randomuser.me/api/portraits/women/10.jpg"
              alt="..."
              className="avatar img-raised"
            />
            <span>Mary Dunst</span>
          </div>
          <div className="stats">
            <i className="fa fa-heart"></i> 34 &nbsp;
            <i className="fa fa-comment"></i> 45
          </div>
        </div>
      </div>
    </div>
  );
}
