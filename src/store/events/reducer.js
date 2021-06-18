/* eslint-disable import/no-anonymous-default-export */
import { FETCH_EVENTS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};
