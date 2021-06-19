import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectToken } from "../../store/user/selectors";
//import { postEvent } from "../../store/eventDetails/actions";

//CheckBox management: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react

export default function PostEvent() {
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  // const [city, setCity] = useState("");
  const [parkId, setParkId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  console.log("what is startHour", startHour, typeof startHour);
  console.log("what is startDate", startDate, typeof startDate);
  console.log("what is endDate", endDate, typeof endDate);

  // console.log("what is city", city);
  // console.log("what is park", park);

  //Checkbox Initial State
  const [state, setState] = React.useState({
    music: false,
    sport: false,
    meetup: false,
    dance: false,
    artMartial: false,
    fitness: false,
    game: false,
    education: false,
  });

  // console.log("what is music", state.music);
  // console.log("what is sport", state.sport);
  // console.log("what is meetup", state.meetup);
  // console.log("what is dance", state.dance);
  // console.log("what is artMartial", state.artMartial);
  // console.log("what is fitness", state.fitness);
  // console.log("what is game", state.game);
  // console.log("what is education", state.education);

  function handleChange(event) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  // function submitForm(event) {
  //   dispatch(postEvent(title, imageUrl, minimumBid));
  // }

  if (!token) {
    return <div>You need to login to post a Event</div>;
  }
  return (
    <form>
      <h2> Start a new Event!</h2>
      <p>
        <label>
          {" "}
          Profile Photo:{" "}
          <input
            type="text"
            value={imageUrl}
            placeholder="Event image url"
            onChange={(e) => setImageUrl(e.target.value)}
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
            type="textarea"
            cols="60"
            rows="10"
            value={description}
            placeholder="You Event's descriptions here"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Event's Phone Number (optional):{" "}
          <input
            type="number"
            value={phone}
            placeholder="You Event's descriptions here"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
      </p>
      <h4>Choose at least 1 tag:</h4>
      <p>
        <label>
          {" "}
          Music:{" "}
          <input
            type="checkbox"
            name={"music"}
            checked={state.music}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Sport:{" "}
          <input
            type="checkbox"
            name={"sport"}
            checked={state.sport}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          MeetUp:{" "}
          <input
            type="checkbox"
            name={"meetup"}
            checked={state.meetup}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Dance:{" "}
          <input
            type="checkbox"
            name={"dance"}
            checked={state.dance}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Art Martial:{" "}
          <input
            type="checkbox"
            name={"artMartial"}
            checked={state.artMartial}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Fitness:{" "}
          <input
            type="checkbox"
            name={"fitness"}
            checked={state.fitness}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Game:{" "}
          <input
            type="checkbox"
            name={"game"}
            checked={state.game}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}
          Education:{" "}
          <input
            type="checkbox"
            name={"education"}
            checked={state.education}
            onChange={handleChange}
            // onChange={() => setIsArtist(!isArtist)}
          />
        </label>
      </p>

      <p>
        <label>
          Select a City / Park:
          <select
            name="park"
            value={parkId}
            onChange={(e) => setParkId(e.target.value)}
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
      {/* TODO: INSERT MAP ACCORDING CHOSE PARK  AND LET THE USER INSERT A LOCATION*/}
      <p>
        {/* <button type="submit" onClick={submitForm}>
          {" "}
          CREATE{" "}
        </button> */}
      </p>
    </form>
  );
}
