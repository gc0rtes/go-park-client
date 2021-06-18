import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const FETCH_EVENTS_SUCCESS = "FETCH_EVENT_SUCCESS";

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEvents = () => {
  return async (dispatch, getState) => {
    //set appLoad state:true
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/events`);
      dispatch(fetchEventsSuccess(response.data.events));

      //manange error message
      //se eu nao quiser mostrar o erri posso hardcode: "Server error / Internal Server "
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      //set appLoad state:false
      dispatch(appDoneLoading());
    }
  };
};
