import { combineReducers } from "redux";
import posts from "./postReducer";
import meetups from "./meetupReducer";
import user from "./userReducer";

export default combineReducers({
  posts: posts,
  meetups: meetups,
  user: user
});
