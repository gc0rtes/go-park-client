import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
import { showMessageWithTimeout } from "../appState/actions";

export const FETCH_EVENTS_SUCCESS = "FETCH_EVENT_SUCCESS";

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEvents = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/events`);
      dispatch(fetchEventsSuccess(response.data.events));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postEvent = (
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
) => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());

      const response = await axios.post(
        `${apiUrl}/events/`,
        {
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
          parkId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("what is response", response);

      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Event posted successfully",
          5000
        )
      );

      console.log("I'm gonna post an Event", response.data);

      dispatch(fetchEvents());
      console.log("And I'm gonna fetch all events");
    } catch (e) {
      console.log("from action postEvent try/catch", e.message);
    }
  };
};
