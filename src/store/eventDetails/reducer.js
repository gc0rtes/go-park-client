/* eslint-disable import/no-anonymous-default-export */
import { EVENT_DETAILS_FETCHED, EVENT_POST_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EVENT_DETAILS_FETCHED:
      return { ...state, ...payload };
    //Update eventDetails/event State
    case EVENT_POST_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
