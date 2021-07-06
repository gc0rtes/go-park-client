import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import moment from "moment";

//EventCard component
//import EventCard from "../../components/EventCard";
import ModernCard from "../../components/ModernCard";

import SearchMap from "../../components/SearchMap";

//Actions and Selectors
import { selectAllEvents } from "../../store/events/selectors";
import { fetchEvents } from "../../store/events/actions";

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

const parkName = ["Zuiderpark", "Westbroekpark", "Noorderpark", "Westerpark"];
const cityName = ["The Hague", "Amsterdam"];

export default function SearchEvent() {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);

  // const [events] = useState(allEvents);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(allEvents);
  console.log("what is results", results);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  // const history = useHistory();
  // const params = useParams();

  //once we submit the form, the searchText is stored useState
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText(searchText);
    setSearchText("");
  };

  // every input by the user which in turn executes the function in the first argument of the React.useEffect hook. The following function gets executed
  useEffect(() => {
    // Filtering the array 'events' to check if it contains the search term.
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    const filtredArray = allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(searchText) ||
        event.description.toLowerCase().includes(searchText) ||
        event.tag.toLowerCase().includes(searchText) ||
        event.park.name.toLowerCase().includes(searchText) ||
        event.park.city.name.toLowerCase().includes(searchText)
    );
    // console.log("whats is filtredArray", filtredArray);
    setResults(filtredArray);
  }, [searchText, allEvents]);

  //checking if array results is not null, if so we map over the results
  //else we map over the original data
  // console.log("what is results", results);
  // console.log("what is events", events);
  // const toMap = results.length > 0 ? results : events;

  const myMoment = moment();
  // console.log("what is today", myMoment);

  // const tomorrow = moment().add(1, "days").toDate();
  const tomorrow = myMoment.add(1, "days");
  // console.log("what is tomorrow?", tomorrow);

  const formatTomorrow = tomorrow.format("YYYY-MM-DD");
  // console.log("what is formatTomorrow?", formatTomorrow);

  const formatToday = moment().format("YYYY-MM-DD");
  // console.log("what is formatToday?", formatToday);

  // const startDateEvent = allEvents[1]?.startDate;
  // console.log("what is startDateEvent", startDateEvent);

  // const todayEvents = moment(startDateEvent).isSame(formatToday);
  // console.log("what is todayEvents", todayEvents);

  // const tomorrowEvents = moment(startDateEvent).isSame(formatTomorrow);
  // console.log("what is tomorrowEvents", tomorrowEvents);

  const filterToday = allEvents?.filter((event) =>
    moment(event.startDate).isSame(formatToday)
  );
  // console.log("what is filterToday", filterToday);

  const filterTomorrow = allEvents?.filter((event) =>
    moment(event.startDate).isSame(formatTomorrow)
  );
  // console.log("what is filterTomorrow", filterTomorrow);

  return (
    <div className="container">
      <SearchMap results={results} />

      <div className="p-4 p-md-5 mb-4 text-black rounded bg-light">
        <h3>Find your event here!</h3>
        {/* wrapping our input in a form so we can pass a function onSubmit */}
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value.toLowerCase());
            }}
          />
        </form>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        // value={[""]}
        onClick={() => setResults(allEvents)}
      >
        All
      </button>
      {tags.map((tag, index) => {
        return (
          <button
            type="button"
            className="btn btn-primary"
            key={index}
            value={tag.toLowerCase()}
            onClick={(e) => setSearchText(e.target.value)}
          >
            {tag}
          </button>
        );
      })}
      <br />

      <select
        name="city"
        value={""}
        onChange={(e) => setSearchText(e.target.value)}
      >
        <option defaultValue> Select a City:</option>
        {cityName.map((name, index) => {
          return (
            <option key={index} value={name.toLowerCase()}>
              {name}
            </option>
          );
        })}
      </select>

      <select
        name="park"
        value={""}
        onChange={(e) => setSearchText(e.target.value)}
      >
        <option defaultValue>Select a Park:</option>
        {parkName.map((name, index) => {
          return (
            <option key={index} value={name.toLowerCase()}>
              {name}
            </option>
          );
        })}
      </select>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setResults(filterToday)}
      >
        Today
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setResults(filterTomorrow)}
      >
        Tomorrow
      </button>
      <p>
        {/* showing the amount of search results with 3 different cases:
      no results, 1 result, more than 1 */}
        {results.length < 1
          ? "Sorry, nothing matches your search"
          : results.length === 1
          ? `${results.length} result`
          : `${results.length} results`}
      </p>
      <div className="row">
        {results.map((event) => {
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
    </div>
  );
}
