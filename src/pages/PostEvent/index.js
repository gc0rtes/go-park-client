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
    <div class="container container-form bg-light shadow p-3 mb-5  rounded ">
      <div class="row g-5 justify-content-center">
        <div class="py-5 col-md-8 text-center">
          {/* <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
          <h2>Start a New Event</h2>
          <ul style={{ listStyle: "none" }}>
            <li class="lead">
              Choose a title that describes your event &#129300;
            </li>
            <li class="lead">
              Put some cool description and as informative as possible 🎯
            </li>
            <li class="lead">Select a category for your event ⚽</li>
            <li class="lead">And inform the date and hour 📆</li>
            <li class="lead">Pick a park from the list 🏞</li>
            <li class="lead">
              Insert the exact meeting point of your event on the map 📍
            </li>
            <i>Obs: all fields are required 💯</i>
          </ul>
        </div>
      </div>
      <div class="row g-5 justify-content-center">
        {/* <div class="col-md-5 col-lg-4 order-md-last"></div> */}

        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Event description</h4>
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="imgUrl" class="form-label">
                  Event Photo Url
                </label>
                <input
                  id="imgUrl"
                  class="form-control"
                  type="text"
                  value={imageUrl}
                  placeholder="https://"
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
                <div class="invalid-feedback">An image url is required.</div>
              </div>

              <div class="col-sm-6">
                <label for="eventTitle" class="form-label">
                  Title
                </label>
                <input
                  id="eventTitle"
                  class="form-control"
                  type="text"
                  value={title}
                  placeholder="Your title here"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <div class="invalid-feedback">A title is required.</div>
              </div>

              <div class="col-12">
                <label for="textarea" class="form-label">
                  Description
                </label>
                <textarea
                  id="textarea"
                  class="form-control"
                  type="textarea"
                  rows="4"
                  value={description}
                  placeholder="Event descriptions here"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <div class="invalid-feedback">A description is required.</div>
              </div>

              <div class="col-sm-6">
                <label for="phone" class="form-label">
                  Event Contact Phone
                </label>
                <input
                  id="phone"
                  class="form-control"
                  type="number"
                  value={phone}
                  placeholder=""
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <div class="invalid-feedback">A description is required.</div>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row py-3 g-5">
              {/* <label class="form-label"></label> */}
              <div class="col-sm-6">
                <label class="form-label">Choose one category</label>

                <div>
                  {tags.map((tag, index) => {
                    return (
                      <div key={index} class="form-check-inline py-3">
                        <label for={tag} class="form-check-label">
                          {`${tag}:`} &nbsp;
                        </label>
                        <input
                          key={index}
                          id={tag}
                          class="form-check-input"
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
              <div class="col-sm-6">
                <div class="mb-3">
                  <label for="startDate" class="form-label ">
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    class="form-control"
                    type="date"
                    value={startDate}
                    name="startDate"
                    onChange={(e) => setStartDate(e.target.value)}
                  ></input>
                </div>

                <div class="mb-3">
                  <label for="endDate" class="form-label">
                    End Date
                  </label>
                  <input
                    id="endDate"
                    class="form-control"
                    type="date"
                    value={endDate}
                    name="endDate"
                    onChange={(e) => setEndDate(e.target.value)}
                  ></input>
                </div>
                <label for="startHour" class="form-label">
                  What time event start ?{" "}
                </label>
                <input
                  id="startHour"
                  class="form-control"
                  type="time"
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                  name="startHour"
                ></input>
              </div>
            </div>
            <hr class="mb-4" />

            <div class="col-12  mb-3">
              <label for="cityPark" class="form-label">
                Select a City : Park
              </label>
              <select
                id="cityPark"
                class="form-control"
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
            <div class="col-12 mb-3">
              <label class="form-label">
                Insert a marker on the exact location of the event
              </label>
              {/* <div class="shadow p-3 mb-5 bg-body rounded "> */}
              <div class="shadow p-1 mb-3 rounded">
                <MapComp coords={coords} isEventDetail={false} />
              </div>
            </div>
            <hr class="mb-3" />

            <button
              class="w-100 btn btn-primary btn-lg"
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
