import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Event Card component
//import EventCard from "../../components/EventCard";
import ModernCard from "../../components/ModernCard";

//Actions and Selectors
import { fetchEvents } from "../../store/events/actions";
import { selectAllEvents } from "../../store/events/selectors";

import moment from "moment";

import background from "../../resources/images/background4.png";

// const tags = [
//   "Music",
//   "Sport",
//   "Meetup",
//   "Dance",
//   "MartialArt",
//   "Fitness",
//   "Game",
//   "Education",
// ];

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
  // console.log("what is filtredArray", filtredArray);

  // console.log("what is searchTag", searchTag);
  // console.log("what is allEvents", allEvents);
  // console.log("what is filtredArray", filtredArray);

  const toMap = filtredArray.length > 0 ? filtredArray : allEvents;
  return (
    <main className="container py-3">
      <div
        className="p-4 p-md-5 mb-4 text-white rounded bg-light"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">
            Discover what's going on in your city park
          </h1>
          <p className="lead my-3">
            Explore, create and join events that take places in the Nederlands
            parks
          </p>
        </div>
      </div>

      <div className="row">
        {toMap.map((event) => {
          return (
            <div key={event.id} className="col-md-4">
              <ModernCard
                id={event.id}
                imageUrl={event.imageUrl}
                title={event.title}
                startDate={moment(event.startDate).format("ll")}
                startHour={event.startHour}
                parkName={event.park.name}
                cityName={event.park.city.name}
                tag={event.tag}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

/**
 * <div>
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
 */
