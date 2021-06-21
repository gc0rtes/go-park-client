import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectToken } from "../../store/user/selectors";
import { postEvent } from "../../store/eventDetails/actions";

//CheckBox management reference: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react

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
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [parkId, setParkId] = useState();
  const [tag, setTag] = useState("");
  // TODO: lat and lng is to User set the EVENT location on leaflet map
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);

  // TODO: Get user Event location coordenates from LEAFLET MAP
  // For now just hard coding the Event location coordenates
  const lat = 52.055858;
  const lng = 4.285709;

  //mapCenterPark is to show the map center location on leaflet
  //It'll switch according parkId selected
  // const mapCenterPark1 = [52.055858, 4.285709];
  // const mapCenterPark2 = [52.105771, 4.290591];
  // const mapCenterPark3 = [52.394852, 4.919604];
  // const mapCenterPark4 = [52.386702, 4.876364];

  //Set of information to post a Event
  /**
  console.log(imageUrl);
  console.log(title);
  console.log(description);
  console.log(phone);
  console.log("what is startDate", startDate, typeof startDate); //string
  console.log("what is endDate", endDate, typeof endDate); //string
  console.log("what is startHour", startHour, typeof startHour); //string
  console.log("what is lat", lat);
  console.log("what is lng", lng);
  console.log("what is tag", tag);
  console.log("what is parkId", parkId, typeof parkId); //REMEMBER to parseInt before dispatch
  // REMEBER: userId not necessary to send  on body. Router get it from authMiddleware
   */
  console.log("what is tag", tag);
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
        <label>
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
        </label>
      </p>
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
      {/* TODO: INSERT MAP ACCORDING CHOSE PARK  AND LET THE USER INSERT A LOCATION and 
      update the setState for 'lat' and 'lng'*/}
      <p>
        <button type="submit" onClick={submitForm}>
          {" "}
          CREATE{" "}
        </button>
      </p>
    </form>
  );
}
