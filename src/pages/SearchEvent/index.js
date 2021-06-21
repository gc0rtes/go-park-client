import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

//EventCard component
import EventCard from "../../components/EventCard";

//Actions and Selectors
import { selectAllEvents } from "../../store/events/selectors";

export default function SearchEvent() {
  const allEvents = useSelector(selectAllEvents);

  const [events] = useState(allEvents);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

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
    const filtredArray = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchText) ||
        event.description.toLowerCase().includes(searchText) ||
        event.tag.toLowerCase().includes(searchText)
    );
    // console.log("whats is filtredArray", filtredArray);
    setResults(filtredArray);
  }, [searchText]);

  //checking if array results is not null, if so we map over the results
  //else we map over the original data
  // console.log("what is results", results);
  // console.log("what is events", events);
  // const toMap = results.length > 0 ? results : events;

  return (
    <div>
      <h3>Search Page</h3>
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
      <button value="" onClick={(e) => setSearchText(e.target.value)}>
        All
      </button>
      <button value="music" onClick={(e) => setSearchText(e.target.value)}>
        Music
      </button>
      <button value="sport" onClick={(e) => setSearchText(e.target.value)}>
        Sport
      </button>
      <button value="meetup" onClick={(e) => setSearchText(e.target.value)}>
        Meetup
      </button>
      <button value="dance" onClick={(e) => setSearchText(e.target.value)}>
        Dance
      </button>
      <button value="martialart" onClick={(e) => setSearchText(e.target.value)}>
        Martial Arts
      </button>
      <button value="fitness" onClick={(e) => setSearchText(e.target.value)}>
        Fitness
      </button>
      <button value="game" onClick={(e) => setSearchText(e.target.value)}>
        Game
      </button>
      <button value="education" onClick={(e) => setSearchText(e.target.value)}>
        Education
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
      <div>
        {results.map((event) => {
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
    </div>
  );
}
