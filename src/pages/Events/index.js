import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Event Card component
import EventCard from "../../components/EventCard";

//Actions and Selectors
import { fetchEvents } from "../../store/events/actions";
import { selectAllEvents } from "../../store/events/selectors";

import moment from "moment";

const tags = [
  "Music",
  "Sport",
  "Meetup",
  "Dance",
  "MartialArt",
  "Fitness",
  "Game",
  "Education",
];

export default function Events() {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);

  const [searchTag, setSearchTag] = useState([]);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const filtredArray = allEvents.filter((props) =>
    props.tag.toLowerCase().includes(searchTag)
  );
  console.log("what is filtredArray", filtredArray);

  // console.log("what is searchTag", searchTag);
  // console.log("what is allEvents", allEvents);
  // console.log("what is filtredArray", filtredArray);

  const toMap = filtredArray.length > 0 ? filtredArray : allEvents;
  return (
    <div>
      <h3>What's up ?</h3>
      <button value={""} onClick={(e) => setSearchTag(e.target.value)}>
        All
      </button>
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            value={tag.toLowerCase()}
            onClick={(e) => setSearchTag(e.target.value)}
          >
            {tag}
          </button>
        );
      })}

      <p>
        {filtredArray.length > 0
          ? null
          : "Sorry, no events in this category today."}
      </p>
      {toMap.map((event) => {
        return (
          <EventCard
            key={event.id}
            id={event.id}
            imageUrl={event.imageUrl}
            title={event.title}
            startDate={moment(event.startDate).format("ll")}
            startHour={event.startHour}
            parkName={event.park.name}
            cityName={event.park.city.name}
          />
        );
      })}
    </div>
  );
}
