import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// to get params from browser bar
import { useParams } from "react-router-dom";

//TODO: Create a updateGoing action
// import { updateUserGoing } from "../../store/EventDetails/actions";

//TODO: Create a action to Post a comment on event
// import { postComment } from "../../store/EventDetails/actions";

//Actions and Selectors
import { fetchEventById } from "../../store/eventDetails/actions";
import { selectEventDetails } from "../../store/eventDetails/selectors";
import { selectUser } from "../../store/user/selectors";

//Leaflet map
import MapComp from "../../components/MapComp";

import moment from "moment";

export default function ArtDetail() {
  const { id } = useParams();
  const event = useSelector(selectEventDetails);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const coords = [event.lat, event.lng];
  // console.log("what is coords?", coords);

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  if (!event.id) {
    return "Loading...";
  }

  return (
    <div className="container bg-light shadow p-3 my-3  rounded border">
      <div className="row justify-content-center ">
        <div className="p-3 col-md-10 ">
          <h5 className="text-secondary">
            {moment(event.startDate).format("dddd")},{" "}
            {moment(event.startDate).format("ll")} at {event.startHour}
          </h5>
          <h2>{event.title}</h2>
          <h6 className="text-secondary"> Hosted by {event.owner.name}</h6>
        </div>
        <div className="p-3 col-md-6 ">
          <div>
            <img
              className="img-fit-cover-detail shadow rounded mb-3 p-2"
              src={event.imageUrl}
              alt={event.title}
            />
            <span className="tag">{event.tag}</span>
          </div>

          <hr />
          <h4>Event description</h4>
          <p> {event.description} </p>
          <hr />
          <h4>Contact Information</h4>
          <p>
            <i class="fas fa-user-circle"></i> {event.owner.name}
          </p>
          {event.phone ? (
            <p>
              <i class="fas fa-mobile-alt"></i> {event.phone}
            </p>
          ) : null}

          {/* TODO: show cards with people that are going */}
          {/* TODO: button to show comments here */}
          {/* TODO: Make a Component form to Post a new comment */}
        </div>
        <div className="py-3 col-md-4 rounded ">
          <div className="text-left p-3 shadow">
            <p>
              <i className="far fa-calendar-alt"></i> &nbsp;
              {moment(event.startDate).format("dddd")},{" "}
              {moment(event.startDate).format("ll")}
            </p>

            <p>
              <i className="fa fa-clock-o"></i> &nbsp; {event.startHour}
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> &nbsp; {event.park.name}{" "}
              - &nbsp;{event.park.city.name}
            </p>

            <p>
              <i class="fas fa-users"></i>&nbsp;{event.going.length} people are
              going &nbsp;
            </p>

            {user.token ? (
              <button className="btn btn-primary w-100">
                <i class="far fa-plus-square"></i> Join
              </button>
            ) : null}
          </div>

          <div className="py-3 shadow">
            <MapComp coords={coords} isEventDetail={true} height={"300px"} />
          </div>
        </div>
      </div>
    </div>
  );
}
