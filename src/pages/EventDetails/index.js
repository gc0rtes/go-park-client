import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Leaflet from "../../components/Leaflet";

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

export default function ArtDetail() {
  const { id } = useParams();
  const event = useSelector(selectEventDetails);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  // TODO: update the value if user is going or not
  // useEffect(() => {
  //   setAmount(minBid || 0);
  // }, [minBid]);

  // TODO: Post comment
  // useEffect(() => {
  //   setAmount(minBid || 0);
  // }, [minBid]);

  if (!event.id) {
    return "Loading...";
  }

  return (
    <div>
      <img src={event.imageUrl} alt={event.title} />
      <h4>{event.title}</h4>
      <h5>{event.startDate}</h5>
      <h5>{event.going.length} people are going</h5>
      {user.token ? (
        <p>
          <button>Going</button>
        </p>
      ) : null}
      <hr />
      <h4>Event Info.:</h4>
      <p> {event.description} </p>
      <h4>Contact Info.:</h4>
      <h5>Name: {event.owner.name}</h5>
      {event.phone ? <h5>Phone: {event.phone}</h5> : null}
      <hr />
      <Leaflet eventLat={event.park.lat} eventLng={event.park.lng} />

      {/* TODO: button to show comments here */}
      {/* TODO: Make a Component form to Post a new comment */}
    </div>
  );
}
