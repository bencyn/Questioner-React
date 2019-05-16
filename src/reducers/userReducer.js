import { LOGIN } from "../actions/types";

export default function userReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}
