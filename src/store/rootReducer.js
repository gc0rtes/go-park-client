import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import events from "./events/reducer";

export default combineReducers({
  appState,
  user,
  events,
});
