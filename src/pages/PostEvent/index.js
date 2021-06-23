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
  const [parkId, setParkId] = useState();
  const [tag, setTag] = useState("");
  const [latCenterPark, setLatCenterPark] = useState("");
  const [lngCenterPark, setLngCenterPark] = useState("");

  const eventPosition = useSelector(selectMarkPosition);
  const lat = eventPosition.lat;
  const lng = eventPosition.lng;
  // console.log("what is lat?", lat);
  // console.log("what is lng?", lng);

  //passing the center of map coordinates to the leaflet component
  const selectPark = () => {
    console.log("selectPark trigger");
    if (parkId === 1) {
      setLatCenterPark(52.055858);
      setLngCenterPark(4.285709);
    } else if (parkId === 2) {
      setLatCenterPark(52.105771);
      setLngCenterPark(4.290591);
    } else if (parkId === 3) {
      setLatCenterPark(52.394852);
      setLngCenterPark(4.919604);
    } else if (parkId === 4) {
      setLatCenterPark(52.386702);
      setLngCenterPark(4.876364);
    }
  };
  //monitoring the parkId. If the state changes call the selectPark function
  useEffect(() => {
    selectPark();
  }, [parkId]);

  // console.log("what is latCenterPark", latCenterPark);
  // console.log("what is lngCenterPark", lngCenterPark);

  const [location, setLocation] = useState([
    {
      Zuiderpark: [52.055858, 4.285709],
    },
    {
      Westbroekpark: [52.105771, 4.290591],
    },
    {
      Noorderpark: [52.394852, 4.919604],
    },
    {
      Westerpark: [52.386702, 4.876364],
    },
  ]);

  const [coords, setCoords] = useState([52.055858, 4.285709]);
  const handleChange = (e) => {
    const target = e.target.value;
    const newCoords = target.split(",");
    const lat = parseFloat(newCoords[0]);
    const lng = parseFloat(newCoords[1]);
    setCoords([lat, lng]);

    console.log("what is lat?", lat);
    console.log("what is lat?", lng);
  };

  useEffect(() => {
    console.log("what is coords?", coords);
  }, [coords]);

  //  <option value="1">The Hague: Zuiderpark</option>
  //             <option value="2">The Hague: Westbroekpark</option>
  //             <option value="3">Amsterdam: Noorderpark</option>
  //             <option value="4">Amsterdam: Westerpark</option>

  //Set of information to post a Event
  /**
  console.log(imageUrl);
  console.log(title);
  console.log(description);
  console.log(phone);
  console.log("what is startDate", startDate, typeof startDate); //string
  console.log("what is endDate", endDate, typeof endDate); //string
  console.log("what is startHour", startHour, typeof startHour); //string
  console.log("what is tag", tag);
  console.log("what is lat", lat);
  console.log("what is lng", lng);
  console.log("what is tag", tag);
  console.log("what is parkId", parkId, typeof parkId); //REMEMBER to parseInt before dispatch
  // REMEBER: userId not necessary to send  on body. Router get it from authMiddleware
   */

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
      )
    );
    dispatch(fetchEvents());
    history.push("/");
  }

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

      <p>
        {/* <label>
          Select a City / Park:
          <select
            name="park"
            value={parkId}
            onChange={(e) => {
              setParkId(parseInt(e.target.value));
            }}
          >
            <option defaultValue>Select below</option>
            <option value="1">The Hague: Zuiderpark</option>
            <option value="2">The Hague: Westbroekpark</option>
            <option value="3">Amsterdam: Noorderpark</option>
            <option value="4">Amsterdam: Westerpark</option>
          </select>
        </label> */}
      </p>

      <div>
        {/* {latCenterPark ? (
          <Leaflet
            eventLat={latPinEventPlaceHolder}
            eventLng={lngPinEventPlaceHolder}
            parkLat={latCenterPark}
            parkLng={lngCenterPark}
            allowClick={true}
          />
        ) : (
          ""
        )} */}
      </div>
      <div>
        <label>
          Select a City / Park:
          <select value={coords} onChange={handleChange}>
            <option defaultValue>Select below</option>
            {location.map((park, idx) => {
              return (
                <option value={Object.values(park)} key={idx}>
                  {Object.keys(park)}
                </option>
              );
            })}
          </select>
        </label>
      </div>

      <MapComp coords={coords} />

      <p>
        <button type="submit" onClick={submitForm}>
          {" "}
          CREATE{" "}
        </button>
      </p>
    </form>
  );
}
