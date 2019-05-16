import { FETCH_MEETUP } from "../actions/types";

export default function meetReducer(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_MEETUP:
      return action.meetups;
    default:
      return state;
  }
}
