import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import { postEvent } from "../../store/events/actions";

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
    <div className="container container-form bg-light shadow p-3 mb-5  rounded ">
      <div className="row g-5 justify-content-center">
        <div className="py-5 col-md-8 text-center">
          {/* <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
          <h2>Start a New Event</h2>
          <ul style={{ listStyle: "none" }}>
            <li className="lead">
              Choose a title that describes your event &#129300;
            </li>
            <li className="lead">
              Put some cool description and as informative as possible 🎯
            </li>
            <li className="lead">Select a category for your event ⚽</li>
            <li className="lead">And inform the date and hour 📆</li>
            <li className="lead">Pick a park from the list 🏞</li>
            <li className="lead">
              Insert the exact meeting point of your event on the map 📍
            </li>
            <i>Obs: all fields are required 💯</i>
          </ul>
        </div>
      </div>
      <div className="row g-5 justify-content-center">
        {/* <div className="col-md-5 col-lg-4 order-md-last"></div> */}

        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Event description</h4>
          <form className="needs-validation" novalidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label for="imgUrl" className="form-label">
                  Event Photo Url
                </label>
                <input
                  id="imgUrl"
                  className="form-control"
                  type="text"
                  value={imageUrl}
                  placeholder="https://"
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  An image url is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label for="eventTitle" className="form-label">
                  Title
                </label>
                <input
                  id="eventTitle"
                  className="form-control"
                  type="text"
                  value={title}
                  placeholder="Your title here"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <div className="invalid-feedback">A title is required.</div>
              </div>

              <div className="col-12">
                <label for="textarea" className="form-label">
                  Description
                </label>
                <textarea
                  id="textarea"
                  className="form-control"
                  type="textarea"
                  rows="4"
                  value={description}
                  placeholder="Event descriptions here"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  A description is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label for="phone" className="form-label">
                  Event Contact Phone
                </label>
                <input
                  id="phone"
                  className="form-control"
                  type="number"
                  value={phone}
                  placeholder=""
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  A description is required.
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row py-3 g-5">
              {/* <label className="form-label"></label> */}
              <div className="col-sm-6">
                <label className="form-label">Choose one category</label>

                <div>
                  {tags.map((tag, index) => {
                    return (
                      <div key={index} className="form-check-inline py-3">
                        <label for={tag} className="form-check-label">
                          {`${tag}:`} &nbsp;
                        </label>
                        <input
                          key={index}
                          id={tag}
                          className="form-check-input"
                          name="category"
                          value={tag.toLowerCase()}
                          type="radio"
                          onClick={(e) => setTag(e.target.value)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label for="startDate" className="form-label ">
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    className="form-control"
                    type="date"
                    value={startDate}
                    name="startDate"
                    onChange={(e) => setStartDate(e.target.value)}
                  ></input>
                </div>

                <div className="mb-3">
                  <label for="endDate" className="form-label">
                    End Date
                  </label>
                  <input
                    id="endDate"
                    className="form-control"
                    type="date"
                    value={endDate}
                    name="endDate"
                    onChange={(e) => setEndDate(e.target.value)}
                  ></input>
                </div>
                <label for="startHour" className="form-label">
                  What time event start ?{" "}
                </label>
                <input
                  id="startHour"
                  className="form-control"
                  type="time"
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                  name="startHour"
                ></input>
              </div>
            </div>
            <hr className="mb-4" />

            <div className="col-12  mb-3">
              <label for="cityPark" className="form-label">
                Select a City : Park
              </label>
              <select
                id="cityPark"
                className="form-control"
                value={parkId}
                onChange={handleChange}
              >
                <option value={0} disabled>
                  --- Select below ---
                </option>
                {location.map((park, idx) => {
                  return (
                    <option value={park.parkId} key={idx}>
                      {`${park.cityName} : 
                  ${park.parkName}`}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">
                Insert a marker on the exact location of the event
              </label>
              {/* <div className="shadow p-3 mb-5 bg-body rounded "> */}
              <div className="shadow p-1 mb-3 rounded">
                <MapComp
                  coords={coords}
                  isEventDetail={false}
                  height={"500px"}
                />
              </div>
            </div>
            <hr className="mb-3" />

            <button
              className="w-100 btn btn-primary btn-lg"
              type="submit"
              onClick={submitForm}
            >
              Create a new event
            </button>
          </form>
          <i>&nbsp;</i>
        </div>
      </div>
    </div>
  );
}
