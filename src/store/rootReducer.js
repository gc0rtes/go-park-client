import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import events from "./events/reducer";
import eventDetails from "./eventDetails/reducer";

export default combineReducers({
  appState,
  user,
  events,
  eventDetails,
});
