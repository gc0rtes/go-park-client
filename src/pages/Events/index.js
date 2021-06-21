import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Event Card component
import EventCard from "../../components/EventCard";

//Actions and Selectors
import { fetchEvents } from "../../store/events/actions";
import { selectAllEvents } from "../../store/events/selectors";

export default function Events() {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);

  const [searchTag, setSearchTag] = useState([]);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  let filtredArray;
  switch (searchTag) {
    case "music":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    case "sport":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    case "meetup":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    case "dance":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    case "martialart":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    case "fitness":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    case "game":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    case "education":
      filtredArray = allEvents.filter((props) =>
        props.tag.toLowerCase().includes(searchTag)
      );
      break;
    default:
      filtredArray = allEvents;
      break;
  }

  console.log("what is searchTag", searchTag);
  console.log("what is allEvents", allEvents);
  console.log("what is filtredArray", filtredArray);

  const toMap = filtredArray.length > 0 ? filtredArray : allEvents;
  return (
    <div>
      <h3>What's up ?</h3>
      <button value="" onClick={(e) => setSearchTag(e.target.value)}>
        All
      </button>
      <button value="music" onClick={(e) => setSearchTag(e.target.value)}>
        Music
      </button>
      <button value="sport" onClick={(e) => setSearchTag(e.target.value)}>
        Sport
      </button>
      <button value="meetup" onClick={(e) => setSearchTag(e.target.value)}>
        Meetup
      </button>
      <button value="dance" onClick={(e) => setSearchTag(e.target.value)}>
        Dance
      </button>
      <button value="martialart" onClick={(e) => setSearchTag(e.target.value)}>
        Martial Arts
      </button>
      <button value="fitness" onClick={(e) => setSearchTag(e.target.value)}>
        Fitness
      </button>
      <button value="game" onClick={(e) => setSearchTag(e.target.value)}>
        Game
      </button>
      <button value="education" onClick={(e) => setSearchTag(e.target.value)}>
        Education
      </button>
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
            startDate={event.startDate}
            parkName={event.park.name}
            cityName={event.park.city.name}
          />
        );
      })}
    </div>
  );
}
