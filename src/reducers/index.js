import { combineReducers } from "redux";
import meetups from "./meetupsReducer";
import meetup from "./meetupReducer";
import user from "./userReducer";

export default combineReducers({
  meetups: meetups,
  user: user,
  meetup: meetup
});
