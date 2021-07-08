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
      <div className="row  justify-content-center">
        <div className="py-5 col-md-6 ">
          <div>
            <img
              className="img-fit-cover-detail shadow rounded mb-3 p-2"
              src={event.imageUrl}
              alt={event.title}
            />
          </div>
          <div className="text-center">
            <h4>{event.title}</h4>
            <h5>
              <i className="far fa-calendar-alt"></i> &nbsp;
              {moment(event.startDate).format("ll")}
            </h5>
            <h5>
              <i className="fa fa-clock-o"></i> &nbsp; {event.startHour}
            </h5>
            <h5>
              <i class="fas fa-map-marker-alt"></i> &nbsp; {event.park.name} -
              &nbsp;{event.park.city.name}
            </h5>

            <h5>{event.going.length} people are going</h5>
            {user.token ? (
              <p>
                <button>Going</button>
              </p>
            ) : null}
          </div>

          <hr />
          <h4>Event Info.:</h4>
          <p> {event.description} </p>
          <h4>Contact Info.:</h4>
          <h5>Name: {event.owner.name}</h5>
          {event.phone ? <h5>Phone: {event.phone}</h5> : null}
          <hr />
          <MapComp coords={coords} isEventDetail={true} />
          {/* TODO: button to show comments here */}
          {/* TODO: Make a Component form to Post a new comment */}
        </div>
      </div>
    </div>
  );
}
