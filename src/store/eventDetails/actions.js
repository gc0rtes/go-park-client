import axios from "axios";
import { apiUrl } from "../../config/constants";

// import { selectEventDetails } from "./selectors";
// import { fetchEvents } from "../../store/events/actions";

export const EVENT_DETAILS_FETCHED = "EVENT_DETAILS_FETCHED";

const eventDetailsFetched = (event) => ({
  type: EVENT_DETAILS_FETCHED,
  payload: event,
});

export const fetchEventById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/events/${id}`);
    console.log(response.data.event);
    dispatch(eventDetailsFetched(response.data.event));
  };
};
