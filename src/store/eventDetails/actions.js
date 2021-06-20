import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
// import { selectEventDetails } from "./selectors";
// import { fetchEvents } from "../../store/events/actions";

import { showMessageWithTimeout } from "../appState/actions";

export const EVENT_DETAILS_FETCHED = "EVENT_DETAILS_FETCHED";
export const EVENT_POST_SUCCESS = "EVENT_POST_SUCCESS";

const eventDetailsFetched = (event) => ({
  type: EVENT_DETAILS_FETCHED,
  payload: event,
});

export const eventPostSuccess = (event) => ({
  type: EVENT_POST_SUCCESS,
  payload: event,
});

export const fetchEventById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/events/${id}`);
    console.log(response.data.event);
    dispatch(eventDetailsFetched(response.data.event));
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
      console.log("what is response", response);

      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Event posted successfully",
          5000
        )
      );
      dispatch(eventPostSuccess(response.data));
    } catch (e) {
      console.log("from action postEvent try/catch", e.message);
    }
  };
};
