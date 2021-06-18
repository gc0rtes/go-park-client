import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Event Card component
import EventCard from "../../components/EventCard";

//Actions and Selectors
import { fetchEvents } from "../../store/events/actions";
import { selectAllEvents } from "../../store/events/selectors";

export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div>
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            id={event.id}
            imageUrl={event.imageUrl}
            title={event.title}
            startDate={event.startDate}
            parkName={event.park.name}
            cityName={event.park.city.name}
          />
        );
      })}
    </div>
  );
}
