/* eslint-disable import/no-anonymous-default-export */
import { EVENT_MARKER_POSITION_SET } from "./actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EVENT_MARKER_POSITION_SET:
      return { ...state, ...payload };
    default:
      return state;
  }
};
