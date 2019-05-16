import { combineReducers } from "redux";
import posts from "./postReducer";
import meetups from "./meetupReducer";

export default combineReducers({
  posts: posts,
  meetups: meetups
});
