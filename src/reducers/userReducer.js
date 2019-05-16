import { LOGIN, REGISTER } from "../actions/types";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case LOGIN:
      return [action.payload];
    case REGISTER:
      return [...state, action.payload];
    default:
      return state;
  }
}
