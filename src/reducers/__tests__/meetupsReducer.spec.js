import reducer from "../meetupsReducer";
import * as types from "../../actions/types";

describe("meetup reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it("should handle FETCH_MEETUP", () => {
    expect(
      reducer([], {
        type: types.FETCH_MEETUP,
        meetups: "hello world"
      })
    ).toEqual("hello world");
  });
});
