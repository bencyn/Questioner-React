import reducer from "../meetupReducer";
import * as types from "../../actions/types";

describe("meetup reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it("should handle VIEW_MEETUP", () => {
    expect(
      reducer([], {
        type: types.VIEW_MEETUP,
        meetup: "hello world"
      })
    ).toEqual("hello world");
  });
});
