import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import { postEvent } from "../../store/eventDetails/actions";
import { fetchEvents } from "../../store/events/actions";
// import { selectEventDetails } from "../../store/eventDetails/selectors";

import { selectMarkPosition } from "../../store/eventMarkPosition/selectors";

//Leaflet map
import MapComp from "../../components/MapComp";

//hard coded information (for now)
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
const location = [
  {
    parkName: "Zuiderpark",
    cityName: "The Hague",
    parkId: 1,
    coordenates: [52.055858, 4.285709],
  },
  {
    parkName: "Westbroekpark",
    cityName: "The Hague",
    parkId: 2,
    coordenates: [52.105771, 4.290591],
  },
  {
    parkName: "Noorderpark",
    cityName: "Amsterdam",
    parkId: 3,
    coordenates: [52.394852, 4.919604],
  },
  {
    parkName: "Westerpark",
    cityName: "Amsterdam",
    parkId: 4,
    coordenates: [52.386702, 4.876364],
  },
];

export default function PostEvent() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [parkId, setParkId] = useState(0);
  const [tag, setTag] = useState("");
  const [coords, setCoords] = useState([52.055858, 4.285709]);

  function submitForm(e) {
    e.preventDefault();
    dispatch(
      postEvent(
        imageUrl,
        title,
        description,
        phone,
        startDate,
        endDate,
        startHour,
        lat,
        lng,
        tag,
        parkId
        //userId will come from the router (authMiddleware)
      )
    );
    dispatch(fetchEvents());
    history.push("/");
  }

  //Get event position from Redux State and put in submitForm function
  const eventPosition = useSelector(selectMarkPosition);
  const lat = eventPosition.lat;
  const lng = eventPosition.lng;
  // console.log("what is lat?", lat);
  // console.log("what is lng?", lng);

  //Set of information to post a Event
  // console.log(imageUrl);
  // console.log(title);
  // console.log(description);
  // console.log(phone);
  // console.log("what is startDate", startDate, typeof startDate); //string
  // console.log("what is endDate", endDate, typeof endDate); //string
  // console.log("what is startHour", startHour, typeof startHour); //string
  // console.log("what is lat", lat);
  // console.log("what is lng", lng);
  // console.log("what is tag", tag);
  // console.log("what is parkId", parkId, typeof parkId); //REMEMBER to parseInt before dispatch

  const handleChange = (e) => {
    const target = e.target.value;
    // console.log("what is target?", target, typeof target);
    const parkId = parseInt(target);
    // console.log("what is parkId", parkId);
    const found = location.find((id) => id.parkId === parkId);
    // console.log("what is found", found);
    const lat = found.coordenates[0];
    const lng = found.coordenates[1];
    // console.log("what is lat?", lat);
    // console.log("what is lat?", lng);
    setCoords([lat, lng]);
    setParkId(parkId);
  };

  useEffect(() => {
    // console.log("what is coords?", coords);
  }, [coords]);

  if (!token) {
    return <div>You need to login to post a Event</div>;
  }
  return (
    <form>
      <h2> Start a new Event!</h2>
      <p>
        <label>
          {" "}
          Event Photo Url:{" "}
          <input
            type="text"
            value={imageUrl}
            placeholder="Event image url"
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Title:{" "}
          <input
            type="text"
            value={title}
            placeholder="You Event's title here"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Description:{" "}
          <input
            type="text"
            value={description}
            placeholder="Event descriptions here"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Event's Phone Number:{" "}
          <input
            type="number"
            value={phone}
            placeholder="Event's phone number here"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
      </p>
      <h4>Choose one category:</h4>
      <div>
        {tags.map((tag, index) => {
          return (
            <div key={index}>
              <label>
                {`${tag}: `}
                <input
                  key={index}
                  value={tag.toLowerCase()}
                  type="radio"
                  name="category"
                  onClick={(e) => setTag(e.target.value)}
                />
              </label>
            </div>
          );
        })}
      </div>

      <p>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          name="startDate"
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
      </p>
      <p>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          name="endDate"
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
      </p>
      <p>
        <label>What time event start ? </label>
        <input
          type="time"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
          name="startHour"
        ></input>
      </p>

      <div>
        <label>
          Select a City : Park
          <select value={parkId} onChange={handleChange}>
            <option value={0} disabled>
              --- Select below ---
            </option>
            {location.map((park, idx) => {
              return (
                <option value={park.parkId} key={idx}>
                  {`${park.cityName}: 
                  ${park.parkName}`}
                </option>
              );
            })}
          </select>
        </label>
      </div>

      <MapComp coords={coords} isEventDetail={false} />

      <p>
        <button type="submit" onClick={submitForm}>
          {" "}
          CREATE{" "}
        </button>
      </p>
    </form>
  );
}
