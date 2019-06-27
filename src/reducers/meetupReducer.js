import { VIEW_MEETUP } from "../actions/types";

export default function meetReducer(state = [], action) {
  switch (action.type) {
    case VIEW_MEETUP:
      return action.meetup;
    default:
      return state;
  }
}
