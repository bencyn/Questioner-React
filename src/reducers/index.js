import { combineReducers } from "redux";
import meetups from "./meetupReducer";
import user from "./userReducer";

export default combineReducers({
  meetups: meetups,
  user: user
});
