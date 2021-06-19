import { apiUrl } from "../../config/constants";
import axios from "axios";

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
